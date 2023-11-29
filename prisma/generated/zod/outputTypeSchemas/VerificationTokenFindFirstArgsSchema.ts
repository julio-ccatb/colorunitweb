import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationtokenWhereInputSchema } from '../inputTypeSchemas/VerificationtokenWhereInputSchema'
import { VerificationtokenOrderByWithRelationInputSchema } from '../inputTypeSchemas/VerificationtokenOrderByWithRelationInputSchema'
import { VerificationtokenWhereUniqueInputSchema } from '../inputTypeSchemas/VerificationtokenWhereUniqueInputSchema'
import { VerificationtokenScalarFieldEnumSchema } from '../inputTypeSchemas/VerificationtokenScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationtokenSelectSchema: z.ZodType<Prisma.VerificationtokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

export const VerificationtokenFindFirstArgsSchema: z.ZodType<Prisma.VerificationtokenFindFirstArgs> = z.object({
  select: VerificationtokenSelectSchema.optional(),
  where: VerificationtokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationtokenOrderByWithRelationInputSchema.array(),VerificationtokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationtokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationtokenScalarFieldEnumSchema,VerificationtokenScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default VerificationtokenFindFirstArgsSchema;
