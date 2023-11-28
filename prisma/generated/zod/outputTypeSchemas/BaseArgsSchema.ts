import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BaseSelectSchema } from '../inputTypeSchemas/BaseSelectSchema';
import { BaseIncludeSchema } from '../inputTypeSchemas/BaseIncludeSchema';

export const BaseArgsSchema: z.ZodType<Prisma.BaseDefaultArgs> = z.object({
  select: z.lazy(() => BaseSelectSchema).optional(),
  include: z.lazy(() => BaseIncludeSchema).optional(),
}).strict();

export default BaseArgsSchema;
