import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationtokenWhereInputSchema } from '../inputTypeSchemas/VerificationtokenWhereInputSchema'
import { VerificationtokenOrderByWithRelationInputSchema } from '../inputTypeSchemas/VerificationtokenOrderByWithRelationInputSchema'
import { VerificationtokenWhereUniqueInputSchema } from '../inputTypeSchemas/VerificationtokenWhereUniqueInputSchema'

export const VerificationtokenAggregateArgsSchema: z.ZodType<Prisma.VerificationtokenAggregateArgs> = z.object({
  where: VerificationtokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationtokenOrderByWithRelationInputSchema.array(),VerificationtokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationtokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default VerificationtokenAggregateArgsSchema;
