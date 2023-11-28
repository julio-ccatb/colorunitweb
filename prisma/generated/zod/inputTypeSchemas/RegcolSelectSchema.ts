import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegcolbasesFindManyArgsSchema } from "../outputTypeSchemas/RegcolbasesFindManyArgsSchema"
import { RegcolcolorantsFindManyArgsSchema } from "../outputTypeSchemas/RegcolcolorantsFindManyArgsSchema"
import { TbaseArgsSchema } from "../outputTypeSchemas/TbaseArgsSchema"
import { RegcolCountOutputTypeArgsSchema } from "../outputTypeSchemas/RegcolCountOutputTypeArgsSchema"

export const RegcolSelectSchema: z.ZodType<Prisma.RegcolSelect> = z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  carta: z.boolean().optional(),
  R: z.boolean().optional(),
  G: z.boolean().optional(),
  B: z.boolean().optional(),
  tbaseId: z.boolean().optional(),
  process: z.boolean().optional(),
  pesopromedio: z.boolean().optional(),
  brillo: z.boolean().optional(),
  active: z.boolean().optional(),
  coeficienteG: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  regcolbases: z.union([z.boolean(),z.lazy(() => RegcolbasesFindManyArgsSchema)]).optional(),
  regcolcolorants: z.union([z.boolean(),z.lazy(() => RegcolcolorantsFindManyArgsSchema)]).optional(),
  Tbase: z.union([z.boolean(),z.lazy(() => TbaseArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RegcolCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default RegcolSelectSchema;
