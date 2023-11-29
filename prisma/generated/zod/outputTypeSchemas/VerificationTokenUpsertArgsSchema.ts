import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationtokenWhereUniqueInputSchema } from '../inputTypeSchemas/VerificationtokenWhereUniqueInputSchema'
import { VerificationtokenCreateInputSchema } from '../inputTypeSchemas/VerificationtokenCreateInputSchema'
import { VerificationtokenUncheckedCreateInputSchema } from '../inputTypeSchemas/VerificationtokenUncheckedCreateInputSchema'
import { VerificationtokenUpdateInputSchema } from '../inputTypeSchemas/VerificationtokenUpdateInputSchema'
import { VerificationtokenUncheckedUpdateInputSchema } from '../inputTypeSchemas/VerificationtokenUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationtokenSelectSchema: z.ZodType<Prisma.VerificationtokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

export const VerificationtokenUpsertArgsSchema: z.ZodType<Prisma.VerificationtokenUpsertArgs> = z.object({
  select: VerificationtokenSelectSchema.optional(),
  where: VerificationtokenWhereUniqueInputSchema,
  create: z.union([ VerificationtokenCreateInputSchema,VerificationtokenUncheckedCreateInputSchema ]),
  update: z.union([ VerificationtokenUpdateInputSchema,VerificationtokenUncheckedUpdateInputSchema ]),
}).strict()

export default VerificationtokenUpsertArgsSchema;
