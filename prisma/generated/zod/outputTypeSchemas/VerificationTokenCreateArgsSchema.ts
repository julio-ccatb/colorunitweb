import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationtokenCreateInputSchema } from '../inputTypeSchemas/VerificationtokenCreateInputSchema'
import { VerificationtokenUncheckedCreateInputSchema } from '../inputTypeSchemas/VerificationtokenUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationtokenSelectSchema: z.ZodType<Prisma.VerificationtokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

export const VerificationtokenCreateArgsSchema: z.ZodType<Prisma.VerificationtokenCreateArgs> = z.object({
  select: VerificationtokenSelectSchema.optional(),
  data: z.union([ VerificationtokenCreateInputSchema,VerificationtokenUncheckedCreateInputSchema ]),
}).strict()

export default VerificationtokenCreateArgsSchema;
