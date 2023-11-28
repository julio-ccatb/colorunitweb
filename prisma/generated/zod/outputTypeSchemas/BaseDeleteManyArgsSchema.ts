import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BaseWhereInputSchema } from '../inputTypeSchemas/BaseWhereInputSchema'

export const BaseDeleteManyArgsSchema: z.ZodType<Prisma.BaseDeleteManyArgs> = z.object({
  where: BaseWhereInputSchema.optional(),
}).strict()

export default BaseDeleteManyArgsSchema;
