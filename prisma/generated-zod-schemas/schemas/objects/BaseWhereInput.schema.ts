import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TBaseRelationFilterObjectSchema } from './TBaseRelationFilter.schema';
import { TBaseWhereInputObjectSchema } from './TBaseWhereInput.schema';
import { RegColBasesListRelationFilterObjectSchema } from './RegColBasesListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BaseWhereInputObjectSchema),
        z.lazy(() => BaseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BaseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BaseWhereInputObjectSchema),
        z.lazy(() => BaseWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    reforiginal: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tbaseId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    slang: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tbase: z
      .union([
        z.lazy(() => TBaseRelationFilterObjectSchema),
        z.lazy(() => TBaseWhereInputObjectSchema),
      ])
      .optional(),
    regColBases: z
      .lazy(() => RegColBasesListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const BaseWhereInputObjectSchema = Schema;
