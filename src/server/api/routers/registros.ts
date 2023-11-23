import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import {
  DecimalJsLikeSchema,
  NullableDecimalFieldUpdateOperationsInputSchema,
  RegcolCreateInputSchema,
  isValidDecimalInput,
} from "pg/generated/zod";
import { Prisma } from "@prisma/client";
import { mapPrismaErrorToTrpcError } from "~/server/utils/prismaErrorHandler";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { calcularDistanciaRGB, processRegCol } from "../services/registros";
import Decimal from "decimal.js";
import { calcularUnidades } from "~/app/_utils/dispensador";

export const registrosRouter = createTRPCRouter({
  create: protectedProcedure
    .input(RegcolCreateInputSchema)
    .mutation(async ({ ctx, input }) => {
      try {
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
  process: protectedProcedure.input(z.number()).mutation(async ({ input }) => {
    try {
      const processedRegCol = await processRegCol(input);
      return processedRegCol;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        const errorResponse = mapPrismaErrorToTrpcError(error);
        throw new TRPCError(errorResponse);
      }
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
  }),
  findColor: protectedProcedure
    .input(
      z.object({
        R: z.number().optional().default(0),
        G: z.number().optional().default(0),
        B: z.number().optional().default(0),
        tipo: z.number().optional().default(0),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const registros =
        input.tipo == 0
          ? await ctx.db.regcol.findMany({
              include: {
                Tbase: true,
                regcolbases: true,
                regcolcolorants: true,
              },
            })
          : await ctx.db.regcol.findMany({
              where: { tbaseId: input.tipo },
              include: {
                Tbase: true,
                regcolbases: true,
                regcolcolorants: true,
              },
            });

      let diff = registros.map((registro) => {
        const distancia = calcularDistanciaRGB(
          { ...input },
          { R: registro.R, G: registro.G, B: registro.B },
        );
        return { ...registro, distancia };
      });

      diff = diff.sort((a, b) => a.distancia - b.distancia);

      return diff;
    }),
  dispenser: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        amount: z
          .union([
            z
              .union([
                z.number(),
                z.string(),
                z.instanceof(Decimal),
                z.instanceof(Prisma.Decimal),
                DecimalJsLikeSchema,
              ])
              .refine((v) => isValidDecimalInput(v), {
                message: "Must be a Decimal",
              }),
            z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema),
          ])
          .optional(),
      }),
    )
    .query(({ ctx, input }) => {
      const resultado = calcularUnidades(
        new Decimal(62),
        new Decimal(4.95),
        new Decimal(0.69),
      );
      console.log(
        `
        Se necesitan 
        unidades grandes: ${resultado.unidadesGrandes.toString()}uG
        unidades pequeñas: ${resultado.unidadesPequeñas.toString()}uP
        Gramos ingresados:  ${new Decimal(62).toString()} g. 
        diff: ${resultado.margen.toString()}g`,
      );
      return;
    }),
});
