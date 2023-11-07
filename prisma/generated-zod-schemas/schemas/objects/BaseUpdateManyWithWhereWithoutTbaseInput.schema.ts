import { z } from 'zod';
import { BaseScalarWhereInputObjectSchema } from './BaseScalarWhereInput.schema';
import { BaseUpdateManyMutationInputObjectSchema } from './BaseUpdateManyMutationInput.schema';
import { BaseUncheckedUpdateManyWithoutBasesInputObjectSchema } from './BaseUncheckedUpdateManyWithoutBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseUpdateManyWithWhereWithoutTbaseInput> = z
  .object({
    where: z.lazy(() => BaseScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => BaseUpdateManyMutationInputObjectSchema),
      z.lazy(() => BaseUncheckedUpdateManyWithoutBasesInputObjectSchema),
    ]),
  })
  .strict();

export const BaseUpdateManyWithWhereWithoutTbaseInputObjectSchema = Schema;
