import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const RoleUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutUserInput> = z.object({
  roleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default RoleUncheckedUpdateWithoutUserInputSchema;
