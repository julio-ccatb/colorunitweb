import { z } from 'zod';
import { RegColCreateNestedOneWithoutRegColBasesInputObjectSchema } from './RegColCreateNestedOneWithoutRegColBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesCreateWithoutBaseInput> = z
  .object({
    amount: z.number(),
    regCol: z.lazy(
      () => RegColCreateNestedOneWithoutRegColBasesInputObjectSchema,
    ),
  })
  .strict();

export const RegColBasesCreateWithoutBaseInputObjectSchema = Schema;
