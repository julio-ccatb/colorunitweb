import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TbaseArgsSchema } from "../outputTypeSchemas/TbaseArgsSchema"
import { RegcolbasesFindManyArgsSchema } from "../outputTypeSchemas/RegcolbasesFindManyArgsSchema"
import { BaseCountOutputTypeArgsSchema } from "../outputTypeSchemas/BaseCountOutputTypeArgsSchema"

export const BaseIncludeSchema: z.ZodType<Prisma.BaseInclude> = z.object({
  tbase: z.union([z.boolean(),z.lazy(() => TbaseArgsSchema)]).optional(),
  regcolbases: z.union([z.boolean(),z.lazy(() => RegcolbasesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BaseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default BaseIncludeSchema;
