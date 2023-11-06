import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { ColorantUpdateOneRequiredWithoutRegColColorantsNestedInputObjectSchema } from './ColorantUpdateOneRequiredWithoutRegColColorantsNestedInput.schema';
import { RegColUpdateOneRequiredWithoutRegColColorantsNestedInputObjectSchema } from './RegColUpdateOneRequiredWithoutRegColColorantsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUpdateInput> = z
  .object({
    amount: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    colorant: z
      .lazy(
        () =>
          ColorantUpdateOneRequiredWithoutRegColColorantsNestedInputObjectSchema,
      )
      .optional(),
    regCol: z
      .lazy(
        () =>
          RegColUpdateOneRequiredWithoutRegColColorantsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RegColColorantsUpdateInputObjectSchema = Schema;
