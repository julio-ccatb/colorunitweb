import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VerificationtokenCreateInputSchema: z.ZodType<Prisma.VerificationtokenCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export default VerificationtokenCreateInputSchema;
