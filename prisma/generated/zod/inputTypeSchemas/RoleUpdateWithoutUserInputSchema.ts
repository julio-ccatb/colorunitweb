import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const RoleUpdateWithoutUserInputSchema: z.ZodType<Prisma.RoleUpdateWithoutUserInput> = z.object({
  roleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default RoleUpdateWithoutUserInputSchema;
