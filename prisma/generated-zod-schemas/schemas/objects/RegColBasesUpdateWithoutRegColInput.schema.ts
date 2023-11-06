import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { BaseUpdateOneRequiredWithoutRegColBasesNestedInputObjectSchema } from './BaseUpdateOneRequiredWithoutRegColBasesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesUpdateWithoutRegColInput> = z
  .object({
    amount: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    base: z
      .lazy(
        () => BaseUpdateOneRequiredWithoutRegColBasesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RegColBasesUpdateWithoutRegColInputObjectSchema = Schema;
