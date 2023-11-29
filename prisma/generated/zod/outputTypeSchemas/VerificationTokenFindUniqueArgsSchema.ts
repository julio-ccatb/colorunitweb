import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationtokenWhereUniqueInputSchema } from '../inputTypeSchemas/VerificationtokenWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationtokenSelectSchema: z.ZodType<Prisma.VerificationtokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

export const VerificationtokenFindUniqueArgsSchema: z.ZodType<Prisma.VerificationtokenFindUniqueArgs> = z.object({
  select: VerificationtokenSelectSchema.optional(),
  where: VerificationtokenWhereUniqueInputSchema,
}).strict()

export default VerificationtokenFindUniqueArgsSchema;
