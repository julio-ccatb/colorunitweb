import { z } from 'zod';
import { ColorantCreateNestedOneWithoutRegColColorantsInputObjectSchema } from './ColorantCreateNestedOneWithoutRegColColorantsInput.schema';
import { RegColCreateNestedOneWithoutRegColColorantsInputObjectSchema } from './RegColCreateNestedOneWithoutRegColColorantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsCreateInput> = z
  .object({
    amount: z.number(),
    colorant: z.lazy(
      () => ColorantCreateNestedOneWithoutRegColColorantsInputObjectSchema,
    ),
    regCol: z.lazy(
      () => RegColCreateNestedOneWithoutRegColColorantsInputObjectSchema,
    ),
  })
  .strict();

export const RegColColorantsCreateInputObjectSchema = Schema;
