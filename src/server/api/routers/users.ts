import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { UserPartialSchema } from "pg/generated/zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { mapPrismaErrorToTrpcError } from "~/server/utils/prismaErrorHandler";

export const userRouter = createTRPCRouter({
  list: protectedProcedure.input(UserPartialSchema).query(async ({ ctx }) => {
    try {
      const userList = await ctx.db.user.findMany({
        where: {},
        include: { roles: { orderBy: { roleId: "desc" } } },
      });

      return userList;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        const errorResponse = mapPrismaErrorToTrpcError(error);
        throw new TRPCError(errorResponse);
      }
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
  }),
});
