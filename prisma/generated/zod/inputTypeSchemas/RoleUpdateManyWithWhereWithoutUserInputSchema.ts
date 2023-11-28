import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleScalarWhereInputSchema } from './RoleScalarWhereInputSchema';
import { RoleUpdateManyMutationInputSchema } from './RoleUpdateManyMutationInputSchema';
import { RoleUncheckedUpdateManyWithoutUserInputSchema } from './RoleUncheckedUpdateManyWithoutUserInputSchema';

export const RoleUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.RoleUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => RoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleUpdateManyMutationInputSchema),z.lazy(() => RoleUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default RoleUpdateManyWithWhereWithoutUserInputSchema;
