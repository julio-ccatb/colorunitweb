import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPostInputObjectSchema } from './UserCreateWithoutPostInput.schema';
import { UserUncheckedCreateWithoutPostInputObjectSchema } from './UserUncheckedCreateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPostInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPostInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutPostInputObjectSchema = Schema;
