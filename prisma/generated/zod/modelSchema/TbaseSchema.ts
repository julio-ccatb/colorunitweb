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
// TBASE SCHEMA
/////////////////////////////////////////

export const TbaseSchema = z.object({
  id: z.number().int(),
  description: z.string(),
  shortcode: z.string(),
  peso1: z.instanceof(Prisma.Decimal, { message: "Field 'peso1' must be a Decimal. Location: ['Models', 'Tbase']"}).nullable(),
  peso2: z.instanceof(Prisma.Decimal, { message: "Field 'peso2' must be a Decimal. Location: ['Models', 'Tbase']"}).nullable(),
  peso3: z.instanceof(Prisma.Decimal, { message: "Field 'peso3' must be a Decimal. Location: ['Models', 'Tbase']"}).nullable(),
  peso4: z.instanceof(Prisma.Decimal, { message: "Field 'peso4' must be a Decimal. Location: ['Models', 'Tbase']"}).nullable(),
  peso5: z.instanceof(Prisma.Decimal, { message: "Field 'peso5' must be a Decimal. Location: ['Models', 'Tbase']"}).nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Tbase = z.infer<typeof TbaseSchema>

/////////////////////////////////////////
// TBASE PARTIAL SCHEMA
/////////////////////////////////////////

export const TbasePartialSchema = TbaseSchema.partial()

export type TbasePartial = z.infer<typeof TbasePartialSchema>

/////////////////////////////////////////
// TBASE RELATION SCHEMA
/////////////////////////////////////////

export type TbaseRelations = {
  base: BaseWithRelations[];
  regcol: RegcolWithRelations[];
};

export type TbaseWithRelations = z.infer<typeof TbaseSchema> & TbaseRelations

export const TbaseWithRelationsSchema: z.ZodType<TbaseWithRelations> = TbaseSchema.merge(z.object({
  base: z.lazy(() => BaseWithRelationsSchema).array(),
  regcol: z.lazy(() => RegcolWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// TBASE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TbasePartialRelations = {
  base?: BasePartialWithRelations[];
  regcol?: RegcolPartialWithRelations[];
};

export type TbasePartialWithRelations = z.infer<typeof TbasePartialSchema> & TbasePartialRelations

export const TbasePartialWithRelationsSchema: z.ZodType<TbasePartialWithRelations> = TbasePartialSchema.merge(z.object({
  base: z.lazy(() => BasePartialWithRelationsSchema).array(),
  regcol: z.lazy(() => RegcolPartialWithRelationsSchema).array(),
})).partial()

export type TbaseWithPartialRelations = z.infer<typeof TbaseSchema> & TbasePartialRelations

export const TbaseWithPartialRelationsSchema: z.ZodType<TbaseWithPartialRelations> = TbaseSchema.merge(z.object({
  base: z.lazy(() => BasePartialWithRelationsSchema).array(),
  regcol: z.lazy(() => RegcolPartialWithRelationsSchema).array(),
}).partial())

export default TbaseSchema;
