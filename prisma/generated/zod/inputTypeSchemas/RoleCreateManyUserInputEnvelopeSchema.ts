import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateManyUserInputSchema } from './RoleCreateManyUserInputSchema';

export const RoleCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.RoleCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleCreateManyUserInputSchema),z.lazy(() => RoleCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RoleCreateManyUserInputEnvelopeSchema;
