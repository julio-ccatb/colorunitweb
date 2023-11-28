import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ColorantArgsSchema } from "../outputTypeSchemas/ColorantArgsSchema"
import { RegcolArgsSchema } from "../outputTypeSchemas/RegcolArgsSchema"

export const RegcolcolorantsIncludeSchema: z.ZodType<Prisma.RegcolcolorantsInclude> = z.object({
  colorant: z.union([z.boolean(),z.lazy(() => ColorantArgsSchema)]).optional(),
  regcol: z.union([z.boolean(),z.lazy(() => RegcolArgsSchema)]).optional(),
}).strict()

export default RegcolcolorantsIncludeSchema;
