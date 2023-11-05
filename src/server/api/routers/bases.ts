import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

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

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
});
