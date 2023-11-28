import { z } from 'zod';
import type { TbaseWithRelations } from './TbaseSchema'
import type { TbasePartialWithRelations } from './TbaseSchema'
import type { RegcolbasesWithRelations } from './RegcolbasesSchema'
import type { RegcolbasesPartialWithRelations } from './RegcolbasesSchema'
import { TbaseWithRelationsSchema } from './TbaseSchema'
import { TbasePartialWithRelationsSchema } from './TbaseSchema'
import { RegcolbasesWithRelationsSchema } from './RegcolbasesSchema'
import { RegcolbasesPartialWithRelationsSchema } from './RegcolbasesSchema'

/////////////////////////////////////////
// BASE SCHEMA
/////////////////////////////////////////

export const BaseSchema = z.object({
  id: z.number().int(),
  reforiginal: z.string(),
  tbaseId: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  slang: z.string(),
})

export type Base = z.infer<typeof BaseSchema>

/////////////////////////////////////////
// BASE PARTIAL SCHEMA
/////////////////////////////////////////

export const BasePartialSchema = BaseSchema.partial()

export type BasePartial = z.infer<typeof BasePartialSchema>

/////////////////////////////////////////
// BASE RELATION SCHEMA
/////////////////////////////////////////

export type BaseRelations = {
  tbase: TbaseWithRelations;
  regcolbases: RegcolbasesWithRelations[];
};

export type BaseWithRelations = z.infer<typeof BaseSchema> & BaseRelations

export const BaseWithRelationsSchema: z.ZodType<BaseWithRelations> = BaseSchema.merge(z.object({
  tbase: z.lazy(() => TbaseWithRelationsSchema),
  regcolbases: z.lazy(() => RegcolbasesWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// BASE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type BasePartialRelations = {
  tbase?: TbasePartialWithRelations;
  regcolbases?: RegcolbasesPartialWithRelations[];
};

export type BasePartialWithRelations = z.infer<typeof BasePartialSchema> & BasePartialRelations

export const BasePartialWithRelationsSchema: z.ZodType<BasePartialWithRelations> = BasePartialSchema.merge(z.object({
  tbase: z.lazy(() => TbasePartialWithRelationsSchema),
  regcolbases: z.lazy(() => RegcolbasesPartialWithRelationsSchema).array(),
})).partial()

export type BaseWithPartialRelations = z.infer<typeof BaseSchema> & BasePartialRelations

export const BaseWithPartialRelationsSchema: z.ZodType<BaseWithPartialRelations> = BaseSchema.merge(z.object({
  tbase: z.lazy(() => TbasePartialWithRelationsSchema),
  regcolbases: z.lazy(() => RegcolbasesPartialWithRelationsSchema).array(),
}).partial())

export default BaseSchema;
