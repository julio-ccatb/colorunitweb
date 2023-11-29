import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VerificationtokenCountOrderByAggregateInputSchema } from './VerificationtokenCountOrderByAggregateInputSchema';
import { VerificationtokenMaxOrderByAggregateInputSchema } from './VerificationtokenMaxOrderByAggregateInputSchema';
import { VerificationtokenMinOrderByAggregateInputSchema } from './VerificationtokenMinOrderByAggregateInputSchema';

export const VerificationtokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationtokenOrderByWithAggregationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationtokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationtokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationtokenMinOrderByAggregateInputSchema).optional()
}).strict();

export default VerificationtokenOrderByWithAggregationInputSchema;
