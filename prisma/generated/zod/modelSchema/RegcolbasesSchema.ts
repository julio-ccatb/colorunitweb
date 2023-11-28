import { z } from 'zod';
import { Prisma } from '@prisma/client'
import type { BaseWithRelations } from './BaseSchema'
import type { BasePartialWithRelations } from './BaseSchema'
import type { RegcolWithRelations } from './RegcolSchema'
import type { RegcolPartialWithRelations } from './RegcolSchema'
import { BaseWithRelationsSchema } from './BaseSchema'
import { BasePartialWithRelationsSchema } from './BaseSchema'
import { RegcolWithRelationsSchema } from './RegcolSchema'
import { RegcolPartialWithRelationsSchema } from './RegcolSchema'

/////////////////////////////////////////
// REGCOLBASES SCHEMA
/////////////////////////////////////////

export const RegcolbasesSchema = z.object({
  id: z.number().int(),
  regColId: z.number().int(),
  baseId: z.number().int(),
  amount: z.instanceof(Prisma.Decimal, { message: "Field 'amount' must be a Decimal. Location: ['Models', 'Regcolbases']"}),
})

export type Regcolbases = z.infer<typeof RegcolbasesSchema>

/////////////////////////////////////////
// REGCOLBASES PARTIAL SCHEMA
/////////////////////////////////////////

export const RegcolbasesPartialSchema = RegcolbasesSchema.partial()

export type RegcolbasesPartial = z.infer<typeof RegcolbasesPartialSchema>

/////////////////////////////////////////
// REGCOLBASES RELATION SCHEMA
/////////////////////////////////////////

export type RegcolbasesRelations = {
  base: BaseWithRelations;
  regcol: RegcolWithRelations;
};

export type RegcolbasesWithRelations = z.infer<typeof RegcolbasesSchema> & RegcolbasesRelations

export const RegcolbasesWithRelationsSchema: z.ZodType<RegcolbasesWithRelations> = RegcolbasesSchema.merge(z.object({
  base: z.lazy(() => BaseWithRelationsSchema),
  regcol: z.lazy(() => RegcolWithRelationsSchema),
}))

/////////////////////////////////////////
// REGCOLBASES PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type RegcolbasesPartialRelations = {
  base?: BasePartialWithRelations;
  regcol?: RegcolPartialWithRelations;
};

export type RegcolbasesPartialWithRelations = z.infer<typeof RegcolbasesPartialSchema> & RegcolbasesPartialRelations

export const RegcolbasesPartialWithRelationsSchema: z.ZodType<RegcolbasesPartialWithRelations> = RegcolbasesPartialSchema.merge(z.object({
  base: z.lazy(() => BasePartialWithRelationsSchema),
  regcol: z.lazy(() => RegcolPartialWithRelationsSchema),
})).partial()

export type RegcolbasesWithPartialRelations = z.infer<typeof RegcolbasesSchema> & RegcolbasesPartialRelations

export const RegcolbasesWithPartialRelationsSchema: z.ZodType<RegcolbasesWithPartialRelations> = RegcolbasesSchema.merge(z.object({
  base: z.lazy(() => BasePartialWithRelationsSchema),
  regcol: z.lazy(() => RegcolPartialWithRelationsSchema),
}).partial())

export default RegcolbasesSchema;
