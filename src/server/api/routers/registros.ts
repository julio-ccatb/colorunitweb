import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { RegcolCreateInputSchema } from "pg/generated/zod";
import { Prisma } from "@prisma/client";
import { mapPrismaErrorToTrpcError } from "~/server/utils/prismaErrorHandler";
import { TRPCError } from "@trpc/server";
import Decimal from "decimal.js";
import { z } from "zod";

export const registrosRouter = createTRPCRouter({
  create: protectedProcedure
    .input(RegcolCreateInputSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      try {
        console.log(input);

        const createRegistro = await ctx.db.regcol.create({ data: input });
        return createRegistro;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  process: protectedProcedure
    .input(z.number())
    .mutation(async ({ ctx, input }) => {
      const record = await ctx.db.regcol.findFirst({
        where: { id: input },
        include: { regcolcolorants: true },
      });

      const recordsBasesBlancas = await ctx.db.regcolbases.findMany({
        where: { regColId: input, base: { slang: "BLANCO" } },
        orderBy: { amount: "desc" },
        include: { base: true },
      });
      const recordsBasesNoBalncas = await ctx.db.regcolbases.findMany({
        where: { regColId: input, NOT: { base: { slang: "BLANCO" } } },
        orderBy: { amount: "desc" },
        include: { base: true },
      });

      if (!recordsBasesBlancas || !recordsBasesNoBalncas) return;

      const bases = [...recordsBasesBlancas, ...recordsBasesNoBalncas];
      let totalPeso = new Decimal(0);
      let pesoBasesBlancas = new Decimal(0);
      let pesoBasesNoBlancas = new Decimal(0);
      let pesoColorantes = new Decimal(0);

      recordsBasesBlancas.map((record) => {
        pesoBasesBlancas = Decimal.sum(record.amount, pesoBasesBlancas);
        totalPeso = Decimal.sum(record.amount, totalPeso);
      });

      recordsBasesNoBalncas.map((record) => {
        pesoBasesNoBlancas = Decimal.sum(record.amount, pesoBasesNoBlancas);
        totalPeso = Decimal.sum(record.amount, totalPeso);
      });

      record?.regcolcolorants.map((record) => {
        pesoColorantes = Decimal.sum(record.amount.mul(0.0022), pesoColorantes);
        totalPeso = Decimal.sum(record.amount.mul(0.0022), totalPeso);
      });

      let tipo = 0;
      if (pesoBasesBlancas.greaterThanOrEqualTo(pesoBasesNoBlancas))
        tipo = recordsBasesBlancas[0]?.base.tbaseId ?? 0;

      const porcentaje = pesoBasesBlancas.div(totalPeso).mul(100);

      const tipoBase = await ctx.db.tbase.findFirst({ where: { id: tipo } });

      let selectedPeso;

      if (porcentaje.greaterThanOrEqualTo(95)) {
        selectedPeso = tipoBase!.peso1;
      } else if (porcentaje.greaterThanOrEqualTo(85)) {
        selectedPeso = tipoBase!.peso2;
      } else if (porcentaje.greaterThanOrEqualTo(75)) {
        selectedPeso = tipoBase!.peso3;
      } else if (porcentaje.greaterThanOrEqualTo(65)) {
        selectedPeso = tipoBase!.peso4;
      } else {
        selectedPeso = tipoBase!.peso5;
      }

      const coeficienteG = selectedPeso?.div(totalPeso) ?? 1;
      const pesoFinal = totalPeso.mul(coeficienteG);

      const updatedbases = await ctx.db.$transaction(
        bases.map((record) =>
          ctx.db.regcolbases.update({
            where: { id: record.id },
            data: { amount: record.amount.mul(coeficienteG) },
          }),
        ),
      );
      const updatedcolorants = await ctx.db.$transaction(
        record!.regcolcolorants.map((record) =>
          ctx.db.regcolcolorants.update({
            where: { id: record.id },
            data: { amount: record.amount.mul(coeficienteG) },
          }),
        ),
      );

      console.log({ updatedbases, updatedcolorants });

      console.log({
        bases,
        tipo,
        pesoBasesBlancas,
        pesoBasesNoBlancas,
        pesoColorantes,
        totalPeso,
        selectedPeso,
        coeficienteG,
        pesoFinal,
      });
    }),
});
