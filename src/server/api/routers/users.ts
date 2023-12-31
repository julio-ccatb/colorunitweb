import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { UserPartialSchema } from "pg/generated/zod";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { mapPrismaErrorToTrpcError } from "~/server/utils/prismaErrorHandler";
import { type UserRole, rolesToCodes } from "~/server/utils/roles";

export const userRouter = createTRPCRouter({
  list: protectedProcedure.input(UserPartialSchema).query(async ({ ctx }) => {
    try {
      const userList = await ctx.db.user.findMany({
        where: {},
        include: { role: { orderBy: { roleId: "desc" } }, account: {} },
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

  updateRoles: protectedProcedure
    .input(z.object({ roles: z.array(z.custom<UserRole>()), id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.role.deleteMany({ where: { userId: input.id } });
        const querys = input.roles.map((role) => {
          return ctx.db.user.update({
            where: { id: input.id },
            data: {
              role: {
                upsert: {
                  create: { roleId: rolesToCodes[role] },
                  update: { roleId: rolesToCodes[role] },
                  where: {
                    roleId_userId: {
                      roleId: rolesToCodes[role],
                      userId: input.id,
                    },
                  },
                },
              },
            },
          });
        });

        const result = await ctx.db.$transaction(querys);
        return result;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          const errorResponse = mapPrismaErrorToTrpcError(error);
          throw new TRPCError(errorResponse);
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
});
