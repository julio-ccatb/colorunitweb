import { z } from 'zod';
import { Prisma } from '@prisma/client'
import type { ColorantWithRelations } from './ColorantSchema'
import type { ColorantPartialWithRelations } from './ColorantSchema'
import type { RegcolWithRelations } from './RegcolSchema'
import type { RegcolPartialWithRelations } from './RegcolSchema'
import { ColorantWithRelationsSchema } from './ColorantSchema'
import { ColorantPartialWithRelationsSchema } from './ColorantSchema'
import { RegcolWithRelationsSchema } from './RegcolSchema'
import { RegcolPartialWithRelationsSchema } from './RegcolSchema'

/////////////////////////////////////////
// REGCOLCOLORANTS SCHEMA
/////////////////////////////////////////

export const RegcolcolorantsSchema = z.object({
  id: z.number().int(),
  regColId: z.number().int(),
  colorantId: z.number().int(),
  amount: z.instanceof(Prisma.Decimal, { message: "Field 'amount' must be a Decimal. Location: ['Models', 'Regcolcolorants']"}),
})

export type Regcolcolorants = z.infer<typeof RegcolcolorantsSchema>

/////////////////////////////////////////
// REGCOLCOLORANTS PARTIAL SCHEMA
/////////////////////////////////////////

export const RegcolcolorantsPartialSchema = RegcolcolorantsSchema.partial()

export type RegcolcolorantsPartial = z.infer<typeof RegcolcolorantsPartialSchema>

/////////////////////////////////////////
// REGCOLCOLORANTS RELATION SCHEMA
/////////////////////////////////////////

export type RegcolcolorantsRelations = {
  colorant: ColorantWithRelations;
  regcol: RegcolWithRelations;
};

export type RegcolcolorantsWithRelations = z.infer<typeof RegcolcolorantsSchema> & RegcolcolorantsRelations

export const RegcolcolorantsWithRelationsSchema: z.ZodType<RegcolcolorantsWithRelations> = RegcolcolorantsSchema.merge(z.object({
  colorant: z.lazy(() => ColorantWithRelationsSchema),
  regcol: z.lazy(() => RegcolWithRelationsSchema),
}))

/////////////////////////////////////////
// REGCOLCOLORANTS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type RegcolcolorantsPartialRelations = {
  colorant?: ColorantPartialWithRelations;
  regcol?: RegcolPartialWithRelations;
};

export type RegcolcolorantsPartialWithRelations = z.infer<typeof RegcolcolorantsPartialSchema> & RegcolcolorantsPartialRelations

export const RegcolcolorantsPartialWithRelationsSchema: z.ZodType<RegcolcolorantsPartialWithRelations> = RegcolcolorantsPartialSchema.merge(z.object({
  colorant: z.lazy(() => ColorantPartialWithRelationsSchema),
  regcol: z.lazy(() => RegcolPartialWithRelationsSchema),
})).partial()

export type RegcolcolorantsWithPartialRelations = z.infer<typeof RegcolcolorantsSchema> & RegcolcolorantsPartialRelations

export const RegcolcolorantsWithPartialRelationsSchema: z.ZodType<RegcolcolorantsWithPartialRelations> = RegcolcolorantsSchema.merge(z.object({
  colorant: z.lazy(() => ColorantPartialWithRelationsSchema),
  regcol: z.lazy(() => RegcolPartialWithRelationsSchema),
}).partial())

export default RegcolcolorantsSchema;
