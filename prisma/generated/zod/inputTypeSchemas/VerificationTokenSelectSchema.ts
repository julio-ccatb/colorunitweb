import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const VerificationtokenSelectSchema: z.ZodType<Prisma.VerificationtokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

export default VerificationtokenSelectSchema;
