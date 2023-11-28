import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolbasesWhereInputSchema } from '../inputTypeSchemas/RegcolbasesWhereInputSchema'

export const RegcolbasesDeleteManyArgsSchema: z.ZodType<Prisma.RegcolbasesDeleteManyArgs> = z.object({
  where: RegcolbasesWhereInputSchema.optional(),
}).strict()

export default RegcolbasesDeleteManyArgsSchema;
