import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TbaseWhereInputSchema } from '../inputTypeSchemas/TbaseWhereInputSchema'

export const TbaseDeleteManyArgsSchema: z.ZodType<Prisma.TbaseDeleteManyArgs> = z.object({
  where: TbaseWhereInputSchema.optional(),
}).strict()

export default TbaseDeleteManyArgsSchema;
