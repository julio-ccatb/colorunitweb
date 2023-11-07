import { z } from 'zod';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { ColorantUpdateOneRequiredWithoutRegColColorantsNestedInputObjectSchema } from './ColorantUpdateOneRequiredWithoutRegColColorantsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUpdateWithoutRegColInput> = z
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
  })
  .strict();

export const RegColColorantsUpdateWithoutRegColInputObjectSchema = Schema;
