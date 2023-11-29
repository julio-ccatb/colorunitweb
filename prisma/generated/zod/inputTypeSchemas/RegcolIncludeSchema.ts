import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TbaseArgsSchema } from "../outputTypeSchemas/TbaseArgsSchema"
import { RegcolbasesFindManyArgsSchema } from "../outputTypeSchemas/RegcolbasesFindManyArgsSchema"
import { RegcolcolorantsFindManyArgsSchema } from "../outputTypeSchemas/RegcolcolorantsFindManyArgsSchema"
import { RegcolCountOutputTypeArgsSchema } from "../outputTypeSchemas/RegcolCountOutputTypeArgsSchema"

export const RegcolIncludeSchema: z.ZodType<Prisma.RegcolInclude> = z.object({
  tbase: z.union([z.boolean(),z.lazy(() => TbaseArgsSchema)]).optional(),
  regcolbases: z.union([z.boolean(),z.lazy(() => RegcolbasesFindManyArgsSchema)]).optional(),
  regcolcolorants: z.union([z.boolean(),z.lazy(() => RegcolcolorantsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RegcolCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default RegcolIncludeSchema;
