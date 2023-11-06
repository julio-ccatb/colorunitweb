import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RegColBasesScalarWhereInputObjectSchema),
        z.lazy(() => RegColBasesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RegColBasesScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RegColBasesScalarWhereInputObjectSchema),
        z.lazy(() => RegColBasesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    regColId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    baseId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    amount: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const RegColBasesScalarWhereInputObjectSchema = Schema;
