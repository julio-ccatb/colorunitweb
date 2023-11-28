import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BaseUpdateManyMutationInputSchema } from '../inputTypeSchemas/BaseUpdateManyMutationInputSchema'
import { BaseUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BaseUncheckedUpdateManyInputSchema'
import { BaseWhereInputSchema } from '../inputTypeSchemas/BaseWhereInputSchema'

export const BaseUpdateManyArgsSchema: z.ZodType<Prisma.BaseUpdateManyArgs> = z.object({
  data: z.union([ BaseUpdateManyMutationInputSchema,BaseUncheckedUpdateManyInputSchema ]),
  where: BaseWhereInputSchema.optional(),
}).strict()

export default BaseUpdateManyArgsSchema;
