import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateWithoutUserInputSchema } from './RoleUpdateWithoutUserInputSchema';
import { RoleUncheckedUpdateWithoutUserInputSchema } from './RoleUncheckedUpdateWithoutUserInputSchema';
import { RoleCreateWithoutUserInputSchema } from './RoleCreateWithoutUserInputSchema';
import { RoleUncheckedCreateWithoutUserInputSchema } from './RoleUncheckedCreateWithoutUserInputSchema';

export const RoleUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RoleUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleUpdateWithoutUserInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutUserInputSchema),z.lazy(() => RoleUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default RoleUpsertWithWhereUniqueWithoutUserInputSchema;
