import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { ExtendedCreateInputSchema } from "pg/generated/zod";
import { z } from "zod";
import { mapPrismaErrorToTrpcError } from "~/server/utils/prismaErrorHandler";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { isAfter, isBefore } from "date-fns";

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
    .input(
      z.object({
        customerId: z.string(),
        startDate: z.coerce.date().optional(),
        endDate: z.coerce.date().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const customerId = input.customerId;
        const extendeds = await ctx.db.extended.findMany({
          where: {
            customerId,
          },
        });

        const filteredData = extendeds.filter((item) => {
          const itemDate = item.createdAt;

          // Check if the item's date is within the selected date range
          return (
            (!input.startDate || isAfter(itemDate, input.startDate)) &&
            (!input.endDate || isBefore(itemDate, input.endDate))
          );
        });
        console.log(filteredData, input);

        return filteredData;
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
