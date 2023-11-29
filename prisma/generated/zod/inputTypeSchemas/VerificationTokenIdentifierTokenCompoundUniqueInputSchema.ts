import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VerificationtokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.VerificationtokenIdentifierTokenCompoundUniqueInput> = z.object({
  identifier: z.string(),
  token: z.string()
}).strict();

export default VerificationtokenIdentifierTokenCompoundUniqueInputSchema;
