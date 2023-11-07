import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RegColColorantsScalarWhereInputObjectSchema),
        z.lazy(() => RegColColorantsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RegColColorantsScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RegColColorantsScalarWhereInputObjectSchema),
        z.lazy(() => RegColColorantsScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const RegColColorantsScalarWhereInputObjectSchema = Schema;
