import { createTRPCRouter } from "~/server/api/trpc";
import { baseRouter } from "./routers/bases";
import { colorantesRouter } from "./routers/colorantes";
import { registrosRouter } from "./routers/registros";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  base: baseRouter,
  colorante: colorantesRouter,
  registro: registrosRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
