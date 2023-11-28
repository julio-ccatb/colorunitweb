import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ColorantSelectSchema } from '../inputTypeSchemas/ColorantSelectSchema';
import { ColorantIncludeSchema } from '../inputTypeSchemas/ColorantIncludeSchema';

export const ColorantArgsSchema: z.ZodType<Prisma.ColorantDefaultArgs> = z.object({
  select: z.lazy(() => ColorantSelectSchema).optional(),
  include: z.lazy(() => ColorantIncludeSchema).optional(),
}).strict();

export default ColorantArgsSchema;
