import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BaseArgsSchema } from "../outputTypeSchemas/BaseArgsSchema"
import { RegcolArgsSchema } from "../outputTypeSchemas/RegcolArgsSchema"

export const RegcolbasesIncludeSchema: z.ZodType<Prisma.RegcolbasesInclude> = z.object({
  base: z.union([z.boolean(),z.lazy(() => BaseArgsSchema)]).optional(),
  regcol: z.union([z.boolean(),z.lazy(() => RegcolArgsSchema)]).optional(),
}).strict()

export default RegcolbasesIncludeSchema;
