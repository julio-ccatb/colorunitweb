import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BaseIncludeSchema } from '../inputTypeSchemas/BaseIncludeSchema'
import { BaseWhereUniqueInputSchema } from '../inputTypeSchemas/BaseWhereUniqueInputSchema'
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

export const BaseFindUniqueArgsSchema: z.ZodType<Prisma.BaseFindUniqueArgs> = z.object({
  select: BaseSelectSchema.optional(),
  include: BaseIncludeSchema.optional(),
  where: BaseWhereUniqueInputSchema,
}).strict()

export default BaseFindUniqueArgsSchema;
