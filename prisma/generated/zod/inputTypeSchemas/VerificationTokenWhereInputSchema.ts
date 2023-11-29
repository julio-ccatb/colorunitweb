import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const VerificationtokenWhereInputSchema: z.ZodType<Prisma.VerificationtokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationtokenWhereInputSchema),z.lazy(() => VerificationtokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationtokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationtokenWhereInputSchema),z.lazy(() => VerificationtokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default VerificationtokenWhereInputSchema;
