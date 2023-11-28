import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BaseIncludeSchema } from '../inputTypeSchemas/BaseIncludeSchema'
import { BaseWhereInputSchema } from '../inputTypeSchemas/BaseWhereInputSchema'
import { BaseOrderByWithRelationInputSchema } from '../inputTypeSchemas/BaseOrderByWithRelationInputSchema'
import { BaseWhereUniqueInputSchema } from '../inputTypeSchemas/BaseWhereUniqueInputSchema'
import { BaseScalarFieldEnumSchema } from '../inputTypeSchemas/BaseScalarFieldEnumSchema'
import { TbaseArgsSchema } from "../outputTypeSchemas/TbaseArgsSchema"
import { RegcolbasesFindManyArgsSchema } from "../outputTypeSchemas/RegcolbasesFindManyArgsSchema"
import { BaseCountOutputTypeArgsSchema } from "../outputTypeSchemas/BaseCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BaseSelectSchema: z.ZodType<Prisma.BaseSelect> = z.object({
  id: z.boolean().optional(),
  reforiginal: z.boolean().optional(),
  tbaseId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  slang: z.boolean().optional(),
  tbase: z.union([z.boolean(),z.lazy(() => TbaseArgsSchema)]).optional(),
  regcolbases: z.union([z.boolean(),z.lazy(() => RegcolbasesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BaseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BaseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BaseFindFirstOrThrowArgs> = z.object({
  select: BaseSelectSchema.optional(),
  include: BaseIncludeSchema.optional(),
  where: BaseWhereInputSchema.optional(),
  orderBy: z.union([ BaseOrderByWithRelationInputSchema.array(),BaseOrderByWithRelationInputSchema ]).optional(),
  cursor: BaseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BaseScalarFieldEnumSchema,BaseScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default BaseFindFirstOrThrowArgsSchema;
