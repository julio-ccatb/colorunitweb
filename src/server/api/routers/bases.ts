import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { TBaseCreateWithoutBasesInputSchema } from "pg/generated/zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { mapPrismaErrorToTrpcError } from "~/server/utils/prismaErrorHandler";

export const baseRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    const bases = await ctx.db.base.findMany({
      include: { tbase: true },
      orderBy: { tbase: { id: "desc" } },
    });
    return bases;
  }),

  listTypeBase: protectedProcedure.query(async ({ ctx }) => {
    const tiposBase = await ctx.db.tBase.findMany({
      orderBy: { description: "asc" },
    });
    return tiposBase;
  }),

  createTypeBase: protectedProcedure
    .input(TBaseCreateWithoutBasesInputSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        // Attempt to create a new TBase record
        const createdTBase = await ctx.db.tBase.create({ data: input });

        return createdTBase; // Return the created object
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
      }
    }),
});
