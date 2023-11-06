import { z } from 'zod';
import { BaseCreateNestedOneWithoutRegColBasesInputObjectSchema } from './BaseCreateNestedOneWithoutRegColBasesInput.schema';
import { RegColCreateNestedOneWithoutRegColBasesInputObjectSchema } from './RegColCreateNestedOneWithoutRegColBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesCreateInput> = z
  .object({
    amount: z.number(),
    base: z.lazy(() => BaseCreateNestedOneWithoutRegColBasesInputObjectSchema),
    regCol: z.lazy(
      () => RegColCreateNestedOneWithoutRegColBasesInputObjectSchema,
    ),
  })
  .strict();

export const RegColBasesCreateInputObjectSchema = Schema;
