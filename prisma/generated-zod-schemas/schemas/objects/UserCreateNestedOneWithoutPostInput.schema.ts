import { z } from 'zod';
import { UserCreateWithoutPostInputObjectSchema } from './UserCreateWithoutPostInput.schema';
import { UserUncheckedCreateWithoutPostInputObjectSchema } from './UserUncheckedCreateWithoutPostInput.schema';
import { UserCreateOrConnectWithoutPostInputObjectSchema } from './UserCreateOrConnectWithoutPostInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutPostInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutPostInputObjectSchema = Schema;
