import { z } from 'zod';
import { RegColSelectObjectSchema } from './objects/RegColSelect.schema';
import { RegColWhereUniqueInputObjectSchema } from './objects/RegColWhereUniqueInput.schema';
import { RegColCreateInputObjectSchema } from './objects/RegColCreateInput.schema';
import { RegColUncheckedCreateInputObjectSchema } from './objects/RegColUncheckedCreateInput.schema';
import { RegColUpdateInputObjectSchema } from './objects/RegColUpdateInput.schema';
import { RegColUncheckedUpdateInputObjectSchema } from './objects/RegColUncheckedUpdateInput.schema';

export const RegColUpsertSchema = z.object({
  select: RegColSelectObjectSchema.optional(),
  where: RegColWhereUniqueInputObjectSchema,
  create: z.union([
    RegColCreateInputObjectSchema,
    RegColUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RegColUpdateInputObjectSchema,
    RegColUncheckedUpdateInputObjectSchema,
  ]),
});
