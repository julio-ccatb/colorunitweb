import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolcolorantsIncludeSchema } from '../inputTypeSchemas/RegcolcolorantsIncludeSchema'
import { RegcolcolorantsUpdateInputSchema } from '../inputTypeSchemas/RegcolcolorantsUpdateInputSchema'
import { RegcolcolorantsUncheckedUpdateInputSchema } from '../inputTypeSchemas/RegcolcolorantsUncheckedUpdateInputSchema'
import { RegcolcolorantsWhereUniqueInputSchema } from '../inputTypeSchemas/RegcolcolorantsWhereUniqueInputSchema'
import { ColorantArgsSchema } from "../outputTypeSchemas/ColorantArgsSchema"
import { RegcolArgsSchema } from "../outputTypeSchemas/RegcolArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RegcolcolorantsSelectSchema: z.ZodType<Prisma.RegcolcolorantsSelect> = z.object({
  id: z.boolean().optional(),
  regColId: z.boolean().optional(),
  colorantId: z.boolean().optional(),
  amount: z.boolean().optional(),
  colorant: z.union([z.boolean(),z.lazy(() => ColorantArgsSchema)]).optional(),
  regcol: z.union([z.boolean(),z.lazy(() => RegcolArgsSchema)]).optional(),
}).strict()

export const RegcolcolorantsUpdateArgsSchema: z.ZodType<Prisma.RegcolcolorantsUpdateArgs> = z.object({
  select: RegcolcolorantsSelectSchema.optional(),
  include: RegcolcolorantsIncludeSchema.optional(),
  data: z.union([ RegcolcolorantsUpdateInputSchema,RegcolcolorantsUncheckedUpdateInputSchema ]),
  where: RegcolcolorantsWhereUniqueInputSchema,
}).strict()

export default RegcolcolorantsUpdateArgsSchema;
