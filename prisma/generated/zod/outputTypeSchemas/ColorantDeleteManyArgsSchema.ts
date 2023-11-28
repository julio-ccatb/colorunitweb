import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ColorantWhereInputSchema } from '../inputTypeSchemas/ColorantWhereInputSchema'

export const ColorantDeleteManyArgsSchema: z.ZodType<Prisma.ColorantDeleteManyArgs> = z.object({
  where: ColorantWhereInputSchema.optional(),
}).strict()

export default ColorantDeleteManyArgsSchema;
