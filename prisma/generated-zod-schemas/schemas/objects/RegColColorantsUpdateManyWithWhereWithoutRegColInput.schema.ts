import { z } from 'zod';
import { RegColColorantsScalarWhereInputObjectSchema } from './RegColColorantsScalarWhereInput.schema';
import { RegColColorantsUpdateManyMutationInputObjectSchema } from './RegColColorantsUpdateManyMutationInput.schema';
import { RegColColorantsUncheckedUpdateManyWithoutRegColColorantsInputObjectSchema } from './RegColColorantsUncheckedUpdateManyWithoutRegColColorantsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColColorantsUpdateManyWithWhereWithoutRegColInput> =
  z
    .object({
      where: z.lazy(() => RegColColorantsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RegColColorantsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            RegColColorantsUncheckedUpdateManyWithoutRegColColorantsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RegColColorantsUpdateManyWithWhereWithoutRegColInputObjectSchema =
  Schema;
