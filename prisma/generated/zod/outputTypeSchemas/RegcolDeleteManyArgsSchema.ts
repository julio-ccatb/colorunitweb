import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolWhereInputSchema } from '../inputTypeSchemas/RegcolWhereInputSchema'

export const RegcolDeleteManyArgsSchema: z.ZodType<Prisma.RegcolDeleteManyArgs> = z.object({
  where: RegcolWhereInputSchema.optional(),
}).strict()

export default RegcolDeleteManyArgsSchema;
