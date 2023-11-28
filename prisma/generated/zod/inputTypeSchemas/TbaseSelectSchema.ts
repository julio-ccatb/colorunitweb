import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BaseFindManyArgsSchema } from "../outputTypeSchemas/BaseFindManyArgsSchema"
import { RegcolFindManyArgsSchema } from "../outputTypeSchemas/RegcolFindManyArgsSchema"
import { TbaseCountOutputTypeArgsSchema } from "../outputTypeSchemas/TbaseCountOutputTypeArgsSchema"

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
  regCol: z.union([z.boolean(),z.lazy(() => RegcolFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TbaseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TbaseSelectSchema;
