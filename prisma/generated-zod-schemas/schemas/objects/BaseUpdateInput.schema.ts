import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TBaseUpdateOneRequiredWithoutBasesNestedInputObjectSchema } from './TBaseUpdateOneRequiredWithoutBasesNestedInput.schema';
import { RegColBasesUpdateManyWithoutBaseNestedInputObjectSchema } from './RegColBasesUpdateManyWithoutBaseNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BaseUpdateInput> = z
  .object({
    reforiginal: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    slang: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    tbase: z
      .lazy(() => TBaseUpdateOneRequiredWithoutBasesNestedInputObjectSchema)
      .optional(),
    regColBases: z
      .lazy(() => RegColBasesUpdateManyWithoutBaseNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BaseUpdateInputObjectSchema = Schema;
