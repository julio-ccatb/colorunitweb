import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationtokenWhereInputSchema } from '../inputTypeSchemas/VerificationtokenWhereInputSchema'
import { VerificationtokenOrderByWithAggregationInputSchema } from '../inputTypeSchemas/VerificationtokenOrderByWithAggregationInputSchema'
import { VerificationtokenScalarFieldEnumSchema } from '../inputTypeSchemas/VerificationtokenScalarFieldEnumSchema'
import { VerificationtokenScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/VerificationtokenScalarWhereWithAggregatesInputSchema'

export const VerificationtokenGroupByArgsSchema: z.ZodType<Prisma.VerificationtokenGroupByArgs> = z.object({
  where: VerificationtokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationtokenOrderByWithAggregationInputSchema.array(),VerificationtokenOrderByWithAggregationInputSchema ]).optional(),
  by: VerificationtokenScalarFieldEnumSchema.array(),
  having: VerificationtokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default VerificationtokenGroupByArgsSchema;
