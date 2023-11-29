import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationtokenWhereInputSchema } from '../inputTypeSchemas/VerificationtokenWhereInputSchema'

export const VerificationtokenDeleteManyArgsSchema: z.ZodType<Prisma.VerificationtokenDeleteManyArgs> = z.object({
  where: VerificationtokenWhereInputSchema.optional(),
}).strict()

export default VerificationtokenDeleteManyArgsSchema;
