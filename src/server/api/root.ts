import { createTRPCRouter } from "~/server/api/trpc";
import { baseRouter } from "./routers/bases";
import { coloranteRouter } from "./routers/colorantes";
import { registroRouter } from "./routers/registros";
import { userRouter } from "./routers/users";
import { orderRouter } from "./routers/orders";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  base: baseRouter,
  colorante: coloranteRouter,
  registro: registroRouter,
  user: userRouter,
  order: orderRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
