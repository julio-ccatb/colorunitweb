import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolbasesIncludeSchema } from '../inputTypeSchemas/RegcolbasesIncludeSchema'
import { RegcolbasesCreateInputSchema } from '../inputTypeSchemas/RegcolbasesCreateInputSchema'
import { RegcolbasesUncheckedCreateInputSchema } from '../inputTypeSchemas/RegcolbasesUncheckedCreateInputSchema'
import { BaseArgsSchema } from "../outputTypeSchemas/BaseArgsSchema"
import { RegcolArgsSchema } from "../outputTypeSchemas/RegcolArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RegcolbasesSelectSchema: z.ZodType<Prisma.RegcolbasesSelect> = z.object({
  id: z.boolean().optional(),
  regColId: z.boolean().optional(),
  baseId: z.boolean().optional(),
  amount: z.boolean().optional(),
  base: z.union([z.boolean(),z.lazy(() => BaseArgsSchema)]).optional(),
  regcol: z.union([z.boolean(),z.lazy(() => RegcolArgsSchema)]).optional(),
}).strict()

export const RegcolbasesCreateArgsSchema: z.ZodType<Prisma.RegcolbasesCreateArgs> = z.object({
  select: RegcolbasesSelectSchema.optional(),
  include: RegcolbasesIncludeSchema.optional(),
  data: z.union([ RegcolbasesCreateInputSchema,RegcolbasesUncheckedCreateInputSchema ]),
}).strict()

export default RegcolbasesCreateArgsSchema;
