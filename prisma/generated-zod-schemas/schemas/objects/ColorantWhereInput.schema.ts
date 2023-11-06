import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { RegColColorantsListRelationFilterObjectSchema } from './RegColColorantsListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ColorantWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ColorantWhereInputObjectSchema),
        z.lazy(() => ColorantWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ColorantWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ColorantWhereInputObjectSchema),
        z.lazy(() => ColorantWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    shortcode: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    basecodi: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    gramUP: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    gramUG: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    regColColorants: z
      .lazy(() => RegColColorantsListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ColorantWhereInputObjectSchema = Schema;
