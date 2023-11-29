import { z } from 'zod';
import { Prisma } from '@prisma/client'
import type { TbaseWithRelations } from './TbaseSchema'
import type { TbasePartialWithRelations } from './TbaseSchema'
import type { RegcolbasesWithRelations } from './RegcolbasesSchema'
import type { RegcolbasesPartialWithRelations } from './RegcolbasesSchema'
import type { RegcolcolorantsWithRelations } from './RegcolcolorantsSchema'
import type { RegcolcolorantsPartialWithRelations } from './RegcolcolorantsSchema'
import { TbaseWithRelationsSchema } from './TbaseSchema'
import { TbasePartialWithRelationsSchema } from './TbaseSchema'
import { RegcolbasesWithRelationsSchema } from './RegcolbasesSchema'
import { RegcolbasesPartialWithRelationsSchema } from './RegcolbasesSchema'
import { RegcolcolorantsWithRelationsSchema } from './RegcolcolorantsSchema'
import { RegcolcolorantsPartialWithRelationsSchema } from './RegcolcolorantsSchema'

/////////////////////////////////////////
// REGCOL SCHEMA
/////////////////////////////////////////

export const RegcolSchema = z.object({
  id: z.number().int(),
  description: z.string().nullable(),
  carta: z.number().int().nullable(),
  R: z.number().int(),
  G: z.number().int(),
  B: z.number().int(),
  pesopromedio: z.instanceof(Prisma.Decimal, { message: "Field 'pesopromedio' must be a Decimal. Location: ['Models', 'Regcol']"}).nullable(),
  brillo: z.instanceof(Prisma.Decimal, { message: "Field 'brillo' must be a Decimal. Location: ['Models', 'Regcol']"}).nullable(),
  active: z.boolean().nullable(),
  coeficienteG: z.instanceof(Prisma.Decimal, { message: "Field 'coeficienteG' must be a Decimal. Location: ['Models', 'Regcol']"}).nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  tbaseId: z.number().int().nullable(),
  process: z.boolean(),
})

export type Regcol = z.infer<typeof RegcolSchema>

/////////////////////////////////////////
// REGCOL PARTIAL SCHEMA
/////////////////////////////////////////

export const RegcolPartialSchema = RegcolSchema.partial()

export type RegcolPartial = z.infer<typeof RegcolPartialSchema>

/////////////////////////////////////////
// REGCOL RELATION SCHEMA
/////////////////////////////////////////

export type RegcolRelations = {
  tbase?: TbaseWithRelations | null;
  regcolbases: RegcolbasesWithRelations[];
  regcolcolorants: RegcolcolorantsWithRelations[];
};

export type RegcolWithRelations = z.infer<typeof RegcolSchema> & RegcolRelations

export const RegcolWithRelationsSchema: z.ZodType<RegcolWithRelations> = RegcolSchema.merge(z.object({
  tbase: z.lazy(() => TbaseWithRelationsSchema).nullable(),
  regcolbases: z.lazy(() => RegcolbasesWithRelationsSchema).array(),
  regcolcolorants: z.lazy(() => RegcolcolorantsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// REGCOL PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type RegcolPartialRelations = {
  tbase?: TbasePartialWithRelations | null;
  regcolbases?: RegcolbasesPartialWithRelations[];
  regcolcolorants?: RegcolcolorantsPartialWithRelations[];
};

export type RegcolPartialWithRelations = z.infer<typeof RegcolPartialSchema> & RegcolPartialRelations

export const RegcolPartialWithRelationsSchema: z.ZodType<RegcolPartialWithRelations> = RegcolPartialSchema.merge(z.object({
  tbase: z.lazy(() => TbasePartialWithRelationsSchema).nullable(),
  regcolbases: z.lazy(() => RegcolbasesPartialWithRelationsSchema).array(),
  regcolcolorants: z.lazy(() => RegcolcolorantsPartialWithRelationsSchema).array(),
})).partial()

export type RegcolWithPartialRelations = z.infer<typeof RegcolSchema> & RegcolPartialRelations

export const RegcolWithPartialRelationsSchema: z.ZodType<RegcolWithPartialRelations> = RegcolSchema.merge(z.object({
  tbase: z.lazy(() => TbasePartialWithRelationsSchema).nullable(),
  regcolbases: z.lazy(() => RegcolbasesPartialWithRelationsSchema).array(),
  regcolcolorants: z.lazy(() => RegcolcolorantsPartialWithRelationsSchema).array(),
}).partial())

export default RegcolSchema;
