import { z } from "zod";
import { BaseCreateNestedManyWithoutTbaseInputObjectSchema } from "./BaseCreateNestedManyWithoutTbaseInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TBaseCreateInput> = z
  .object({
    description: z.string(),
    shortcode: z.string(),
    peso1: z.number().optional().nullable(),
    peso2: z.number().optional().nullable(),
    peso3: z.number().optional().nullable(),
    peso4: z.number().optional().nullable(),
    peso5: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    bases: z
      .lazy(() => BaseCreateNestedManyWithoutTbaseInputObjectSchema)
      .optional(),
  })
  .strict();

export const TBaseCreateInputObjectSchema = Schema;

default export type TbaseCReateInput = z.infer<typeof TBaseCreateInputObjectSchema>;
