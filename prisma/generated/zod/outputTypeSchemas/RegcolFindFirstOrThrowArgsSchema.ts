import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolIncludeSchema } from '../inputTypeSchemas/RegcolIncludeSchema'
import { RegcolWhereInputSchema } from '../inputTypeSchemas/RegcolWhereInputSchema'
import { RegcolOrderByWithRelationInputSchema } from '../inputTypeSchemas/RegcolOrderByWithRelationInputSchema'
import { RegcolWhereUniqueInputSchema } from '../inputTypeSchemas/RegcolWhereUniqueInputSchema'
import { RegcolScalarFieldEnumSchema } from '../inputTypeSchemas/RegcolScalarFieldEnumSchema'
import { TbaseArgsSchema } from "../outputTypeSchemas/TbaseArgsSchema"
import { RegcolbasesFindManyArgsSchema } from "../outputTypeSchemas/RegcolbasesFindManyArgsSchema"
import { RegcolcolorantsFindManyArgsSchema } from "../outputTypeSchemas/RegcolcolorantsFindManyArgsSchema"
import { RegcolCountOutputTypeArgsSchema } from "../outputTypeSchemas/RegcolCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RegcolSelectSchema: z.ZodType<Prisma.RegcolSelect> = z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  carta: z.boolean().optional(),
  R: z.boolean().optional(),
  G: z.boolean().optional(),
  B: z.boolean().optional(),
  pesopromedio: z.boolean().optional(),
  brillo: z.boolean().optional(),
  active: z.boolean().optional(),
  coeficienteG: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  tbaseId: z.boolean().optional(),
  process: z.boolean().optional(),
  tbase: z.union([z.boolean(),z.lazy(() => TbaseArgsSchema)]).optional(),
  regcolbases: z.union([z.boolean(),z.lazy(() => RegcolbasesFindManyArgsSchema)]).optional(),
  regcolcolorants: z.union([z.boolean(),z.lazy(() => RegcolcolorantsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RegcolCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RegcolFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RegcolFindFirstOrThrowArgs> = z.object({
  select: RegcolSelectSchema.optional(),
  include: RegcolIncludeSchema.optional(),
  where: RegcolWhereInputSchema.optional(),
  orderBy: z.union([ RegcolOrderByWithRelationInputSchema.array(),RegcolOrderByWithRelationInputSchema ]).optional(),
  cursor: RegcolWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RegcolScalarFieldEnumSchema,RegcolScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default RegcolFindFirstOrThrowArgsSchema;
