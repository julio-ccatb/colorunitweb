import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VerificationtokenCreateManyInputSchema: z.ZodType<Prisma.VerificationtokenCreateManyInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export default VerificationtokenCreateManyInputSchema;
