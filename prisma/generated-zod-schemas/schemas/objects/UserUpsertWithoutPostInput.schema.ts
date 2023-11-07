import { z } from 'zod';
import { UserUpdateWithoutPostInputObjectSchema } from './UserUpdateWithoutPostInput.schema';
import { UserUncheckedUpdateWithoutPostInputObjectSchema } from './UserUncheckedUpdateWithoutPostInput.schema';
import { UserCreateWithoutPostInputObjectSchema } from './UserCreateWithoutPostInput.schema';
import { UserUncheckedCreateWithoutPostInputObjectSchema } from './UserUncheckedCreateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutPostInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutPostInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutPostInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutPostInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutPostInputObjectSchema = Schema;
