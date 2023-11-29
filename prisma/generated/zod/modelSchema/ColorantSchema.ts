import { z } from 'zod';
import { Prisma } from '@prisma/client'
import type { RegcolcolorantsWithRelations } from './RegcolcolorantsSchema'
import type { RegcolcolorantsPartialWithRelations } from './RegcolcolorantsSchema'
import { RegcolcolorantsWithRelationsSchema } from './RegcolcolorantsSchema'
import { RegcolcolorantsPartialWithRelationsSchema } from './RegcolcolorantsSchema'

/////////////////////////////////////////
// COLORANT SCHEMA
/////////////////////////////////////////

export const ColorantSchema = z.object({
  id: z.number().int(),
  description: z.string(),
  shortcode: z.string(),
  gramUP: z.instanceof(Prisma.Decimal, { message: "Field 'gramUP' must be a Decimal. Location: ['Models', 'Colorant']"}),
  gramUG: z.instanceof(Prisma.Decimal, { message: "Field 'gramUG' must be a Decimal. Location: ['Models', 'Colorant']"}),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  active: z.boolean(),
})

export type Colorant = z.infer<typeof ColorantSchema>

/////////////////////////////////////////
// COLORANT PARTIAL SCHEMA
/////////////////////////////////////////

export const ColorantPartialSchema = ColorantSchema.partial()

export type ColorantPartial = z.infer<typeof ColorantPartialSchema>

/////////////////////////////////////////
// COLORANT RELATION SCHEMA
/////////////////////////////////////////

export type ColorantRelations = {
  regcolcolorants: RegcolcolorantsWithRelations[];
};

export type ColorantWithRelations = z.infer<typeof ColorantSchema> & ColorantRelations

export const ColorantWithRelationsSchema: z.ZodType<ColorantWithRelations> = ColorantSchema.merge(z.object({
  regcolcolorants: z.lazy(() => RegcolcolorantsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// COLORANT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ColorantPartialRelations = {
  regcolcolorants?: RegcolcolorantsPartialWithRelations[];
};

export type ColorantPartialWithRelations = z.infer<typeof ColorantPartialSchema> & ColorantPartialRelations

export const ColorantPartialWithRelationsSchema: z.ZodType<ColorantPartialWithRelations> = ColorantPartialSchema.merge(z.object({
  regcolcolorants: z.lazy(() => RegcolcolorantsPartialWithRelationsSchema).array(),
})).partial()

export type ColorantWithPartialRelations = z.infer<typeof ColorantSchema> & ColorantPartialRelations

export const ColorantWithPartialRelationsSchema: z.ZodType<ColorantWithPartialRelations> = ColorantSchema.merge(z.object({
  regcolcolorants: z.lazy(() => RegcolcolorantsPartialWithRelationsSchema).array(),
}).partial())

export default ColorantSchema;
