import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationtokenUpdateManyMutationInputSchema } from '../inputTypeSchemas/VerificationtokenUpdateManyMutationInputSchema'
import { VerificationtokenUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VerificationtokenUncheckedUpdateManyInputSchema'
import { VerificationtokenWhereInputSchema } from '../inputTypeSchemas/VerificationtokenWhereInputSchema'

export const VerificationtokenUpdateManyArgsSchema: z.ZodType<Prisma.VerificationtokenUpdateManyArgs> = z.object({
  data: z.union([ VerificationtokenUpdateManyMutationInputSchema,VerificationtokenUncheckedUpdateManyInputSchema ]),
  where: VerificationtokenWhereInputSchema.optional(),
}).strict()

export default VerificationtokenUpdateManyArgsSchema;
