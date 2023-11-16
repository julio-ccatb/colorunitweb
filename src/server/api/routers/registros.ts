import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { RegcolCreateInputSchema } from "pg/generated/zod";
import { Prisma } from "@prisma/client";
import { mapPrismaErrorToTrpcError } from "~/server/utils/prismaErrorHandler";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { calcularDistanciaRGB, processRegCol } from "../services/registros";

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
  process: protectedProcedure.input(z.number()).mutation(async ({ input }) => {
    await processRegCol(input);
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
      console.log(diff);
      return diff;
    }),
});
