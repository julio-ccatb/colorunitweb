import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TbaseUpdateManyMutationInputSchema } from '../inputTypeSchemas/TbaseUpdateManyMutationInputSchema'
import { TbaseUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TbaseUncheckedUpdateManyInputSchema'
import { TbaseWhereInputSchema } from '../inputTypeSchemas/TbaseWhereInputSchema'

export const TbaseUpdateManyArgsSchema: z.ZodType<Prisma.TbaseUpdateManyArgs> = z.object({
  data: z.union([ TbaseUpdateManyMutationInputSchema,TbaseUncheckedUpdateManyInputSchema ]),
  where: TbaseWhereInputSchema.optional(),
}).strict()

export default TbaseUpdateManyArgsSchema;
