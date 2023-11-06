import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { RegColUpdateOneRequiredWithoutRegColColorantsNestedInputObjectSchema } from './RegColUpdateOneRequiredWithoutRegColColorantsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUpdateWithoutColorantInput> = z
  .object({
    amount: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    regCol: z
      .lazy(
        () =>
          RegColUpdateOneRequiredWithoutRegColColorantsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RegColColorantsUpdateWithoutColorantInputObjectSchema = Schema;
