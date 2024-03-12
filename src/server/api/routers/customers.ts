import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { mapPrismaErrorToTrpcError } from "~/server/utils/prismaErrorHandler";
import { CustomerCreateInputSchema } from "pg/generated/zod";
import { z } from "zod";

export const customerRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    try {
      const customers = await ctx.db.customer.findMany();

      return customers;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        const errorResponse = mapPrismaErrorToTrpcError(error);
        throw new TRPCError(errorResponse);
      }
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
  }),
  findUnique: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      try {
        const customer = await ctx.db.customer.findUnique({
          where: { id: input },
        });

        return customer;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  create: protectedProcedure
    .input(CustomerCreateInputSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const customer = await ctx.db.customer.create({ data: input });
        return customer;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
});
