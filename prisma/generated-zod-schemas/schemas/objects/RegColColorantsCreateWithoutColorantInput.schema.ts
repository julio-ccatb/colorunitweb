import { z } from 'zod';
import { RegColCreateNestedOneWithoutRegColColorantsInputObjectSchema } from './RegColCreateNestedOneWithoutRegColColorantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsCreateWithoutColorantInput> = z
  .object({
    amount: z.number(),
    regCol: z.lazy(
      () => RegColCreateNestedOneWithoutRegColColorantsInputObjectSchema,
    ),
  })
  .strict();

export const RegColColorantsCreateWithoutColorantInputObjectSchema = Schema;
