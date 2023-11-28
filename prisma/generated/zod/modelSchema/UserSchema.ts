import { z } from 'zod';
import type { RoleWithRelations } from './RoleSchema'
import type { RolePartialWithRelations } from './RoleSchema'
import type { AccountWithRelations } from './AccountSchema'
import type { AccountPartialWithRelations } from './AccountSchema'
import type { SessionWithRelations } from './SessionSchema'
import type { SessionPartialWithRelations } from './SessionSchema'
import { RoleWithRelationsSchema } from './RoleSchema'
import { RolePartialWithRelationsSchema } from './RoleSchema'
import { AccountWithRelationsSchema } from './AccountSchema'
import { AccountPartialWithRelationsSchema } from './AccountSchema'
import { SessionWithRelationsSchema } from './SessionSchema'
import { SessionPartialWithRelationsSchema } from './SessionSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  emailVerified: z.coerce.date().nullable(),
  image: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

/////////////////////////////////////////
// USER RELATION SCHEMA
/////////////////////////////////////////

export type UserRelations = {
  roles: RoleWithRelations[];
  account: AccountWithRelations[];
  session: SessionWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  roles: z.lazy(() => RoleWithRelationsSchema).array(),
  account: z.lazy(() => AccountWithRelationsSchema).array(),
  session: z.lazy(() => SessionWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserPartialRelations = {
  roles?: RolePartialWithRelations[];
  account?: AccountPartialWithRelations[];
  session?: SessionPartialWithRelations[];
};

export type UserPartialWithRelations = z.infer<typeof UserPartialSchema> & UserPartialRelations

export const UserPartialWithRelationsSchema: z.ZodType<UserPartialWithRelations> = UserPartialSchema.merge(z.object({
  roles: z.lazy(() => RolePartialWithRelationsSchema).array(),
  account: z.lazy(() => AccountPartialWithRelationsSchema).array(),
  session: z.lazy(() => SessionPartialWithRelationsSchema).array(),
})).partial()

export type UserWithPartialRelations = z.infer<typeof UserSchema> & UserPartialRelations

export const UserWithPartialRelationsSchema: z.ZodType<UserWithPartialRelations> = UserSchema.merge(z.object({
  roles: z.lazy(() => RolePartialWithRelationsSchema).array(),
  account: z.lazy(() => AccountPartialWithRelationsSchema).array(),
  session: z.lazy(() => SessionPartialWithRelationsSchema).array(),
}).partial())

export default UserSchema;
