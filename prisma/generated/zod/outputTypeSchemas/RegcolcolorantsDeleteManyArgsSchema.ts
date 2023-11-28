import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolcolorantsWhereInputSchema } from '../inputTypeSchemas/RegcolcolorantsWhereInputSchema'

export const RegcolcolorantsDeleteManyArgsSchema: z.ZodType<Prisma.RegcolcolorantsDeleteManyArgs> = z.object({
  where: RegcolcolorantsWhereInputSchema.optional(),
}).strict()

export default RegcolcolorantsDeleteManyArgsSchema;
