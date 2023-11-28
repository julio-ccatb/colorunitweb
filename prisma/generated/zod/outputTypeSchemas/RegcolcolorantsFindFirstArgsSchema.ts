import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolcolorantsIncludeSchema } from '../inputTypeSchemas/RegcolcolorantsIncludeSchema'
import { RegcolcolorantsWhereInputSchema } from '../inputTypeSchemas/RegcolcolorantsWhereInputSchema'
import { RegcolcolorantsOrderByWithRelationInputSchema } from '../inputTypeSchemas/RegcolcolorantsOrderByWithRelationInputSchema'
import { RegcolcolorantsWhereUniqueInputSchema } from '../inputTypeSchemas/RegcolcolorantsWhereUniqueInputSchema'
import { RegcolcolorantsScalarFieldEnumSchema } from '../inputTypeSchemas/RegcolcolorantsScalarFieldEnumSchema'
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

export const RegcolcolorantsFindFirstArgsSchema: z.ZodType<Prisma.RegcolcolorantsFindFirstArgs> = z.object({
  select: RegcolcolorantsSelectSchema.optional(),
  include: RegcolcolorantsIncludeSchema.optional(),
  where: RegcolcolorantsWhereInputSchema.optional(),
  orderBy: z.union([ RegcolcolorantsOrderByWithRelationInputSchema.array(),RegcolcolorantsOrderByWithRelationInputSchema ]).optional(),
  cursor: RegcolcolorantsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RegcolcolorantsScalarFieldEnumSchema,RegcolcolorantsScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default RegcolcolorantsFindFirstArgsSchema;
