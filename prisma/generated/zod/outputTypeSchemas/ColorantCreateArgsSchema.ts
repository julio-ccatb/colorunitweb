import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ColorantIncludeSchema } from '../inputTypeSchemas/ColorantIncludeSchema'
import { ColorantCreateInputSchema } from '../inputTypeSchemas/ColorantCreateInputSchema'
import { ColorantUncheckedCreateInputSchema } from '../inputTypeSchemas/ColorantUncheckedCreateInputSchema'
import { RegcolcolorantsFindManyArgsSchema } from "../outputTypeSchemas/RegcolcolorantsFindManyArgsSchema"
import { ColorantCountOutputTypeArgsSchema } from "../outputTypeSchemas/ColorantCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ColorantSelectSchema: z.ZodType<Prisma.ColorantSelect> = z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  shortcode: z.boolean().optional(),
  gramUP: z.boolean().optional(),
  gramUG: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  active: z.boolean().optional(),
  regcolcolorants: z.union([z.boolean(),z.lazy(() => RegcolcolorantsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ColorantCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ColorantCreateArgsSchema: z.ZodType<Prisma.ColorantCreateArgs> = z.object({
  select: ColorantSelectSchema.optional(),
  include: ColorantIncludeSchema.optional(),
  data: z.union([ ColorantCreateInputSchema,ColorantUncheckedCreateInputSchema ]),
}).strict()

export default ColorantCreateArgsSchema;
