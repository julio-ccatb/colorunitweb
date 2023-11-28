import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ColorantUpdateManyMutationInputSchema } from '../inputTypeSchemas/ColorantUpdateManyMutationInputSchema'
import { ColorantUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ColorantUncheckedUpdateManyInputSchema'
import { ColorantWhereInputSchema } from '../inputTypeSchemas/ColorantWhereInputSchema'

export const ColorantUpdateManyArgsSchema: z.ZodType<Prisma.ColorantUpdateManyArgs> = z.object({
  data: z.union([ ColorantUpdateManyMutationInputSchema,ColorantUncheckedUpdateManyInputSchema ]),
  where: ColorantWhereInputSchema.optional(),
}).strict()

export default ColorantUpdateManyArgsSchema;
