import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutUserInputSchema } from './RoleCreateWithoutUserInputSchema';
import { RoleUncheckedCreateWithoutUserInputSchema } from './RoleUncheckedCreateWithoutUserInputSchema';
import { RoleCreateOrConnectWithoutUserInputSchema } from './RoleCreateOrConnectWithoutUserInputSchema';
import { RoleUpsertWithWhereUniqueWithoutUserInputSchema } from './RoleUpsertWithWhereUniqueWithoutUserInputSchema';
import { RoleCreateManyUserInputEnvelopeSchema } from './RoleCreateManyUserInputEnvelopeSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateWithWhereUniqueWithoutUserInputSchema } from './RoleUpdateWithWhereUniqueWithoutUserInputSchema';
import { RoleUpdateManyWithWhereWithoutUserInputSchema } from './RoleUpdateManyWithWhereWithoutUserInputSchema';
import { RoleScalarWhereInputSchema } from './RoleScalarWhereInputSchema';

export const RoleUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUserInputSchema),z.lazy(() => RoleCreateWithoutUserInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutUserInputSchema),z.lazy(() => RoleCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => RoleUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => RoleUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => RoleUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleScalarWhereInputSchema),z.lazy(() => RoleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RoleUncheckedUpdateManyWithoutUserNestedInputSchema;
