import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleCreateWithoutUserInputSchema } from './RoleCreateWithoutUserInputSchema';
import { RoleUncheckedCreateWithoutUserInputSchema } from './RoleUncheckedCreateWithoutUserInputSchema';

export const RoleCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutUserInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default RoleCreateOrConnectWithoutUserInputSchema;
