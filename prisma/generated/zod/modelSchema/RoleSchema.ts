import { z } from 'zod';
import type { UserWithRelations } from './UserSchema'
import type { UserPartialWithRelations } from './UserSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserPartialWithRelationsSchema } from './UserSchema'

/////////////////////////////////////////
// ROLE SCHEMA
/////////////////////////////////////////

export const RoleSchema = z.object({
  roleId: z.string(),
  userId: z.string(),
})

export type Role = z.infer<typeof RoleSchema>

/////////////////////////////////////////
// ROLE PARTIAL SCHEMA
/////////////////////////////////////////

export const RolePartialSchema = RoleSchema.partial()

export type RolePartial = z.infer<typeof RolePartialSchema>

/////////////////////////////////////////
// ROLE RELATION SCHEMA
/////////////////////////////////////////

export type RoleRelations = {
  user: UserWithRelations;
};

export type RoleWithRelations = z.infer<typeof RoleSchema> & RoleRelations

export const RoleWithRelationsSchema: z.ZodType<RoleWithRelations> = RoleSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
}))

/////////////////////////////////////////
// ROLE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type RolePartialRelations = {
  user?: UserPartialWithRelations;
};

export type RolePartialWithRelations = z.infer<typeof RolePartialSchema> & RolePartialRelations

export const RolePartialWithRelationsSchema: z.ZodType<RolePartialWithRelations> = RolePartialSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
})).partial()

export type RoleWithPartialRelations = z.infer<typeof RoleSchema> & RolePartialRelations

export const RoleWithPartialRelationsSchema: z.ZodType<RoleWithPartialRelations> = RoleSchema.merge(z.object({
  user: z.lazy(() => UserPartialWithRelationsSchema),
}).partial())

export default RoleSchema;
