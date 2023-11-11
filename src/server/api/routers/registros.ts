import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { RegcolCreateInputSchema } from "pg/generated/zod";
import { Prisma } from "@prisma/client";
import { mapPrismaErrorToTrpcError } from "~/server/utils/prismaErrorHandler";
import { TRPCError } from "@trpc/server";

export const registrosRouter = createTRPCRouter({
  create: protectedProcedure
    .input(RegcolCreateInputSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
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
});
