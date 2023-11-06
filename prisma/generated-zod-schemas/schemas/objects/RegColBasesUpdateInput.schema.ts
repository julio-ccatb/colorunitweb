import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { BaseUpdateOneRequiredWithoutRegColBasesNestedInputObjectSchema } from './BaseUpdateOneRequiredWithoutRegColBasesNestedInput.schema';
import { RegColUpdateOneRequiredWithoutRegColBasesNestedInputObjectSchema } from './RegColUpdateOneRequiredWithoutRegColBasesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesUpdateInput> = z
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
    regCol: z
      .lazy(
        () => RegColUpdateOneRequiredWithoutRegColBasesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RegColBasesUpdateInputObjectSchema = Schema;
