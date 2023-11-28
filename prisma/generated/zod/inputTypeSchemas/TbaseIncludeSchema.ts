import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BaseFindManyArgsSchema } from "../outputTypeSchemas/BaseFindManyArgsSchema"
import { RegcolFindManyArgsSchema } from "../outputTypeSchemas/RegcolFindManyArgsSchema"
import { TbaseCountOutputTypeArgsSchema } from "../outputTypeSchemas/TbaseCountOutputTypeArgsSchema"

export const TbaseIncludeSchema: z.ZodType<Prisma.TbaseInclude> = z.object({
  base: z.union([z.boolean(),z.lazy(() => BaseFindManyArgsSchema)]).optional(),
  regCol: z.union([z.boolean(),z.lazy(() => RegcolFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TbaseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TbaseIncludeSchema;
