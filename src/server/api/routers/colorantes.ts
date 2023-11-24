import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import {
  ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema,
  ColorantUpdateArgsSchema,
} from "pg/generated/zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { mapPrismaErrorToTrpcError } from "~/server/utils/prismaErrorHandler";

export const coloranteRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    try {
      const listColorantes = await ctx.db.colorant.findMany({
        orderBy: { shortcode: "desc" },
      });
      return listColorantes;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        const errorResponse = mapPrismaErrorToTrpcError(error);
        throw new TRPCError(errorResponse);
      }
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
  }),

  create: protectedProcedure
    .input(ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        // throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        const createdColorante = await ctx.db.colorant.create({ data: input });
        return createdColorante;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),

  update: protectedProcedure
    .input(ColorantUpdateArgsSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const updatedColorant = await ctx.db.colorant.update(input);
        return updatedColorant;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
});
