import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import {
  BaseCreateArgsSchema,
  TbaseCreateInputSchema,
  TbaseCreateWithoutBaseInputSchema,
  TbaseDeleteArgsSchema,
  TbaseUpdateArgsSchema,
} from "pg/generated/zod";
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
    const tiposBase = await ctx.db.tbase.findMany({
      orderBy: { description: "asc" },
    });
    return tiposBase;
  }),

  createTypeBase: protectedProcedure
    .input(TbaseCreateWithoutBaseInputSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        // Attempt to create a new TBase record
        console.log(input);
        const validate = TbaseCreateInputSchema.parse(input);
        const createdTBase = await ctx.db.tbase.create({ data: validate });

        if (!createdTBase) throw new Error("issues");
        return createdTBase; // Return the created object
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  deleteTypeBase: protectedProcedure
    .input(TbaseDeleteArgsSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const deletedTbase = await ctx.db.tbase.delete(input);
        return deletedTbase;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
      }
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }),
  updateTypeBase: protectedProcedure
    .input(TbaseUpdateArgsSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const updatedTbase = await ctx.db.tbase.update(input);
        return updatedTbase;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
      }
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }),

  create: protectedProcedure
    .input(BaseCreateArgsSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const createdBase = await ctx.db.base.create(input);
        return createdBase;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
      }
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }),
});
