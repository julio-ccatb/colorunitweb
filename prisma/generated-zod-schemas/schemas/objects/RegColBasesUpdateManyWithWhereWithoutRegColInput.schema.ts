import { z } from 'zod';
import { RegColBasesScalarWhereInputObjectSchema } from './RegColBasesScalarWhereInput.schema';
import { RegColBasesUpdateManyMutationInputObjectSchema } from './RegColBasesUpdateManyMutationInput.schema';
import { RegColBasesUncheckedUpdateManyWithoutRegColBasesInputObjectSchema } from './RegColBasesUncheckedUpdateManyWithoutRegColBasesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RegColBasesUpdateManyWithWhereWithoutRegColInput> =
  z
    .object({
      where: z.lazy(() => RegColBasesScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RegColBasesUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            RegColBasesUncheckedUpdateManyWithoutRegColBasesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RegColBasesUpdateManyWithWhereWithoutRegColInputObjectSchema =
  Schema;
