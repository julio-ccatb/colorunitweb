import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { mapPrismaErrorToTrpcError } from "~/server/utils/prismaErrorHandler";
import OrderFindUniqueArgsSchema from "../../../../prisma/generated/zod/outputTypeSchemas/OrderFindUniqueArgsSchema";
import {
  OrderCreateInputSchema,
  OrderWithRelationsSchema,
} from "pg/generated/zod";
import { z } from "zod";

export const orderRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    try {
      const orders = await ctx.db.order.findMany({});

      return orders;
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
        const orders = await ctx.db.order.findUnique({
          where: { id: input },
          include: {
            regcol: {
              include: {
                tbase: true,
                regcolbases: true,
                regcolcolorants: true,
              },
            },
          },
        });

        return orders;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  create: protectedProcedure
    .input(OrderCreateInputSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const order = await ctx.db.order.create({ data: input });
        return order;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
});
