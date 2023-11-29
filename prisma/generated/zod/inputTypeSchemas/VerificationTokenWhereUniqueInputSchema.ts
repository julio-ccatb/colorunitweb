import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VerificationtokenIdentifierTokenCompoundUniqueInputSchema } from './VerificationtokenIdentifierTokenCompoundUniqueInputSchema';
import { VerificationtokenWhereInputSchema } from './VerificationtokenWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const VerificationtokenWhereUniqueInputSchema: z.ZodType<Prisma.VerificationtokenWhereUniqueInput> = z.union([
  z.object({
    token: z.string(),
    identifier_token: z.lazy(() => VerificationtokenIdentifierTokenCompoundUniqueInputSchema)
  }),
  z.object({
    token: z.string(),
  }),
  z.object({
    identifier_token: z.lazy(() => VerificationtokenIdentifierTokenCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  token: z.string().optional(),
  identifier_token: z.lazy(() => VerificationtokenIdentifierTokenCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VerificationtokenWhereInputSchema),z.lazy(() => VerificationtokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationtokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationtokenWhereInputSchema),z.lazy(() => VerificationtokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default VerificationtokenWhereUniqueInputSchema;
