import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { RegColBasesListRelationFilterObjectSchema } from './RegColBasesListRelationFilter.schema';
import { RegColColorantsListRelationFilterObjectSchema } from './RegColColorantsListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RegColWhereInputObjectSchema),
        z.lazy(() => RegColWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RegColWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RegColWhereInputObjectSchema),
        z.lazy(() => RegColWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    carta: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    R: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    G: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    B: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    pesopromedio: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    brillo: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    active: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    coeficienteG: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    regColBases: z
      .lazy(() => RegColBasesListRelationFilterObjectSchema)
      .optional(),
    regColColorants: z
      .lazy(() => RegColColorantsListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const RegColWhereInputObjectSchema = Schema;
