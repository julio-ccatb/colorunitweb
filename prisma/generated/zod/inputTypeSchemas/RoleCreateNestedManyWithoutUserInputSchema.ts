import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutUserInputSchema } from './RoleCreateWithoutUserInputSchema';
import { RoleUncheckedCreateWithoutUserInputSchema } from './RoleUncheckedCreateWithoutUserInputSchema';
import { RoleCreateOrConnectWithoutUserInputSchema } from './RoleCreateOrConnectWithoutUserInputSchema';
import { RoleCreateManyUserInputEnvelopeSchema } from './RoleCreateManyUserInputEnvelopeSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';

export const RoleCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.RoleCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => RoleCreateWithoutUserInputSchema),z.lazy(() => RoleCreateWithoutUserInputSchema).array(),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleCreateOrConnectWithoutUserInputSchema),z.lazy(() => RoleCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleWhereUniqueInputSchema),z.lazy(() => RoleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RoleCreateNestedManyWithoutUserInputSchema;
