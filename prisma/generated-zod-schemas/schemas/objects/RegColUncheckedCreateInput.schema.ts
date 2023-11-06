import { z } from 'zod';
import { RegColBasesUncheckedCreateNestedManyWithoutRegColInputObjectSchema } from './RegColBasesUncheckedCreateNestedManyWithoutRegColInput.schema';
import { RegColColorantsUncheckedCreateNestedManyWithoutRegColInputObjectSchema } from './RegColColorantsUncheckedCreateNestedManyWithoutRegColInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    description: z.string().optional().nullable(),
    carta: z.number().optional().nullable(),
    R: z.number(),
    G: z.number(),
    B: z.number(),
    pesopromedio: z.number().optional().nullable(),
    brillo: z.number().optional().nullable(),
    active: z.boolean().optional().nullable(),
    coeficienteG: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    regColBases: z
      .lazy(
        () =>
          RegColBasesUncheckedCreateNestedManyWithoutRegColInputObjectSchema,
      )
      .optional(),
    regColColorants: z
      .lazy(
        () =>
          RegColColorantsUncheckedCreateNestedManyWithoutRegColInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RegColUncheckedCreateInputObjectSchema = Schema;
