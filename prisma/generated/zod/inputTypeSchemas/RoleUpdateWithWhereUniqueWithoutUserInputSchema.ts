import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateWithoutUserInputSchema } from './RoleUpdateWithoutUserInputSchema';
import { RoleUncheckedUpdateWithoutUserInputSchema } from './RoleUncheckedUpdateWithoutUserInputSchema';

export const RoleUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.RoleUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateWithoutUserInputSchema),z.lazy(() => RoleUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default RoleUpdateWithWhereUniqueWithoutUserInputSchema;
