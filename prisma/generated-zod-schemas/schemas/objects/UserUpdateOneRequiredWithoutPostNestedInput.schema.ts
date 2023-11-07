import { z } from 'zod';
import { UserCreateWithoutPostInputObjectSchema } from './UserCreateWithoutPostInput.schema';
import { UserUncheckedCreateWithoutPostInputObjectSchema } from './UserUncheckedCreateWithoutPostInput.schema';
import { UserCreateOrConnectWithoutPostInputObjectSchema } from './UserCreateOrConnectWithoutPostInput.schema';
import { UserUpsertWithoutPostInputObjectSchema } from './UserUpsertWithoutPostInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutPostInputObjectSchema } from './UserUpdateWithoutPostInput.schema';
import { UserUncheckedUpdateWithoutPostInputObjectSchema } from './UserUncheckedUpdateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPostNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutPostInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutPostInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutPostInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutPostInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutPostInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPostInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutPostNestedInputObjectSchema = Schema;
