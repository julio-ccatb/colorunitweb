import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { RegColUpdateOneRequiredWithoutRegColBasesNestedInputObjectSchema } from './RegColUpdateOneRequiredWithoutRegColBasesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesUpdateWithoutBaseInput> = z
  .object({
    amount: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    regCol: z
      .lazy(
        () => RegColUpdateOneRequiredWithoutRegColBasesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RegColBasesUpdateWithoutBaseInputObjectSchema = Schema;
