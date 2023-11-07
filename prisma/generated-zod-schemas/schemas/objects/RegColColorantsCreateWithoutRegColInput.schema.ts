import { z } from 'zod';
import { ColorantCreateNestedOneWithoutRegColColorantsInputObjectSchema } from './ColorantCreateNestedOneWithoutRegColColorantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsCreateWithoutRegColInput> = z
  .object({
    amount: z.number(),
    colorant: z.lazy(
      () => ColorantCreateNestedOneWithoutRegColColorantsInputObjectSchema,
    ),
  })
  .strict();

export const RegColColorantsCreateWithoutRegColInputObjectSchema = Schema;
