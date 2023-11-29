import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationtokenCreateManyInputSchema } from '../inputTypeSchemas/VerificationtokenCreateManyInputSchema'

export const VerificationtokenCreateManyArgsSchema: z.ZodType<Prisma.VerificationtokenCreateManyArgs> = z.object({
  data: z.union([ VerificationtokenCreateManyInputSchema,VerificationtokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default VerificationtokenCreateManyArgsSchema;
