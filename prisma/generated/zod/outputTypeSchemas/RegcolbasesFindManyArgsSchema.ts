import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolbasesIncludeSchema } from '../inputTypeSchemas/RegcolbasesIncludeSchema'
import { RegcolbasesWhereInputSchema } from '../inputTypeSchemas/RegcolbasesWhereInputSchema'
import { RegcolbasesOrderByWithRelationInputSchema } from '../inputTypeSchemas/RegcolbasesOrderByWithRelationInputSchema'
import { RegcolbasesWhereUniqueInputSchema } from '../inputTypeSchemas/RegcolbasesWhereUniqueInputSchema'
import { RegcolbasesScalarFieldEnumSchema } from '../inputTypeSchemas/RegcolbasesScalarFieldEnumSchema'
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

export const RegcolbasesFindManyArgsSchema: z.ZodType<Prisma.RegcolbasesFindManyArgs> = z.object({
  select: RegcolbasesSelectSchema.optional(),
  include: RegcolbasesIncludeSchema.optional(),
  where: RegcolbasesWhereInputSchema.optional(),
  orderBy: z.union([ RegcolbasesOrderByWithRelationInputSchema.array(),RegcolbasesOrderByWithRelationInputSchema ]).optional(),
  cursor: RegcolbasesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RegcolbasesScalarFieldEnumSchema,RegcolbasesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default RegcolbasesFindManyArgsSchema;
