import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInputSchema';
import { RoleUncheckedUpdateManyWithoutUserNestedInputSchema } from './RoleUncheckedUpdateManyWithoutUserNestedInputSchema';

export const UserUncheckedUpdateWithoutSessionInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  account: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  role: z.lazy(() => RoleUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutSessionInputSchema;
