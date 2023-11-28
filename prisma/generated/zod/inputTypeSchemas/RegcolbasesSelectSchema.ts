import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BaseArgsSchema } from "../outputTypeSchemas/BaseArgsSchema"
import { RegcolArgsSchema } from "../outputTypeSchemas/RegcolArgsSchema"

export const RegcolbasesSelectSchema: z.ZodType<Prisma.RegcolbasesSelect> = z.object({
  id: z.boolean().optional(),
  regColId: z.boolean().optional(),
  baseId: z.boolean().optional(),
  amount: z.boolean().optional(),
  base: z.union([z.boolean(),z.lazy(() => BaseArgsSchema)]).optional(),
  regcol: z.union([z.boolean(),z.lazy(() => RegcolArgsSchema)]).optional(),
}).strict()

export default RegcolbasesSelectSchema;
