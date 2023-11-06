import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { ColorantRelationFilterObjectSchema } from './ColorantRelationFilter.schema';
import { ColorantWhereInputObjectSchema } from './ColorantWhereInput.schema';
import { RegColRelationFilterObjectSchema } from './RegColRelationFilter.schema';
import { RegColWhereInputObjectSchema } from './RegColWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RegColColorantsWhereInputObjectSchema),
        z.lazy(() => RegColColorantsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RegColColorantsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RegColColorantsWhereInputObjectSchema),
        z.lazy(() => RegColColorantsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    regColId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    colorantId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    amount: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    colorant: z
      .union([
        z.lazy(() => ColorantRelationFilterObjectSchema),
        z.lazy(() => ColorantWhereInputObjectSchema),
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

export const RegColColorantsWhereInputObjectSchema = Schema;
