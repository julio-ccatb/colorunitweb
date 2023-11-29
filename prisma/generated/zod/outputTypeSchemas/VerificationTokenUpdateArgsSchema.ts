import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationtokenUpdateInputSchema } from '../inputTypeSchemas/VerificationtokenUpdateInputSchema'
import { VerificationtokenUncheckedUpdateInputSchema } from '../inputTypeSchemas/VerificationtokenUncheckedUpdateInputSchema'
import { VerificationtokenWhereUniqueInputSchema } from '../inputTypeSchemas/VerificationtokenWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationtokenSelectSchema: z.ZodType<Prisma.VerificationtokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

export const VerificationtokenUpdateArgsSchema: z.ZodType<Prisma.VerificationtokenUpdateArgs> = z.object({
  select: VerificationtokenSelectSchema.optional(),
  data: z.union([ VerificationtokenUpdateInputSchema,VerificationtokenUncheckedUpdateInputSchema ]),
  where: VerificationtokenWhereUniqueInputSchema,
}).strict()

export default VerificationtokenUpdateArgsSchema;
