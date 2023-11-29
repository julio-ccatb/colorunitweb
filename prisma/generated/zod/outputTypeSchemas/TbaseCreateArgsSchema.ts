import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TbaseIncludeSchema } from '../inputTypeSchemas/TbaseIncludeSchema'
import { TbaseCreateInputSchema } from '../inputTypeSchemas/TbaseCreateInputSchema'
import { TbaseUncheckedCreateInputSchema } from '../inputTypeSchemas/TbaseUncheckedCreateInputSchema'
import { BaseFindManyArgsSchema } from "../outputTypeSchemas/BaseFindManyArgsSchema"
import { RegcolFindManyArgsSchema } from "../outputTypeSchemas/RegcolFindManyArgsSchema"
import { TbaseCountOutputTypeArgsSchema } from "../outputTypeSchemas/TbaseCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TbaseSelectSchema: z.ZodType<Prisma.TbaseSelect> = z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  shortcode: z.boolean().optional(),
  peso1: z.boolean().optional(),
  peso2: z.boolean().optional(),
  peso3: z.boolean().optional(),
  peso4: z.boolean().optional(),
  peso5: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  base: z.union([z.boolean(),z.lazy(() => BaseFindManyArgsSchema)]).optional(),
  regcol: z.union([z.boolean(),z.lazy(() => RegcolFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TbaseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TbaseCreateArgsSchema: z.ZodType<Prisma.TbaseCreateArgs> = z.object({
  select: TbaseSelectSchema.optional(),
  include: TbaseIncludeSchema.optional(),
  data: z.union([ TbaseCreateInputSchema,TbaseUncheckedCreateInputSchema ]),
}).strict()

export default TbaseCreateArgsSchema;
