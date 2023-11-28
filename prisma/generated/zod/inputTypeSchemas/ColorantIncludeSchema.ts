import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolcolorantsFindManyArgsSchema } from "../outputTypeSchemas/RegcolcolorantsFindManyArgsSchema"
import { ColorantCountOutputTypeArgsSchema } from "../outputTypeSchemas/ColorantCountOutputTypeArgsSchema"

export const ColorantIncludeSchema: z.ZodType<Prisma.ColorantInclude> = z.object({
  regcolcolorants: z.union([z.boolean(),z.lazy(() => RegcolcolorantsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ColorantCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ColorantIncludeSchema;
