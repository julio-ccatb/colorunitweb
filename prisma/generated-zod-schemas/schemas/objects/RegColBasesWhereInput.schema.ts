import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { BaseRelationFilterObjectSchema } from './BaseRelationFilter.schema';
import { BaseWhereInputObjectSchema } from './BaseWhereInput.schema';
import { RegColRelationFilterObjectSchema } from './RegColRelationFilter.schema';
import { RegColWhereInputObjectSchema } from './RegColWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RegColBasesWhereInputObjectSchema),
        z.lazy(() => RegColBasesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RegColBasesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RegColBasesWhereInputObjectSchema),
        z.lazy(() => RegColBasesWhereInputObjectSchema).array(),
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
    base: z
      .union([
        z.lazy(() => BaseRelationFilterObjectSchema),
        z.lazy(() => BaseWhereInputObjectSchema),
      ])
      .optional(),
    regCol: z
      .union([
        z.lazy(() => RegColRelationFilterObjectSchema),
        z.lazy(() => RegColWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const RegColBasesWhereInputObjectSchema = Schema;
