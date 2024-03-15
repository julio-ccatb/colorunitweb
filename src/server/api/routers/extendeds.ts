import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { ExtendedCreateInputSchema } from "pg/generated/zod";
import { z } from "zod";
import { mapPrismaErrorToTrpcError } from "~/server/utils/prismaErrorHandler";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const extendedRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    try {
      const extendeds = await ctx.db.extended.findMany();

      return extendeds;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        const errorResponse = mapPrismaErrorToTrpcError(error);
        throw new TRPCError(errorResponse);
      }
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
  }),
  findByCustomerId: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      try {
        const customerId = input;
        const extendeds = await ctx.db.extended.findMany({
          where: { customerId },
        });

        return extendeds;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  findUnique: protectedProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      try {
        const extended = await ctx.db.extended.findUnique({
          where: { id: input },
        });

        return extended;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  create: protectedProcedure
    .input(ExtendedCreateInputSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const extended = await ctx.db.extended.create({ data: input });
        return extended;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
});
