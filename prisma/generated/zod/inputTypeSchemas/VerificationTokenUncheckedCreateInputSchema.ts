import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VerificationtokenUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationtokenUncheckedCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export default VerificationtokenUncheckedCreateInputSchema;
