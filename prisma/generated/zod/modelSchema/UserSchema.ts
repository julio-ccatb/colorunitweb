import { z } from 'zod';
import type { AccountWithRelations } from './AccountSchema'
import type { AccountPartialWithRelations } from './AccountSchema'
import type { RoleWithRelations } from './RoleSchema'
import type { RolePartialWithRelations } from './RoleSchema'
import type { SessionWithRelations } from './SessionSchema'
import type { SessionPartialWithRelations } from './SessionSchema'
import { AccountWithRelationsSchema } from './AccountSchema'
import { AccountPartialWithRelationsSchema } from './AccountSchema'
import { RoleWithRelationsSchema } from './RoleSchema'
import { RolePartialWithRelationsSchema } from './RoleSchema'
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
  createdAt: z.coerce.date(),
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
  account: AccountWithRelations[];
  role: RoleWithRelations[];
  session: SessionWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  account: z.lazy(() => AccountWithRelationsSchema).array(),
  role: z.lazy(() => RoleWithRelationsSchema).array(),
  session: z.lazy(() => SessionWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserPartialRelations = {
  account?: AccountPartialWithRelations[];
  role?: RolePartialWithRelations[];
  session?: SessionPartialWithRelations[];
};

export type UserPartialWithRelations = z.infer<typeof UserPartialSchema> & UserPartialRelations

export const UserPartialWithRelationsSchema: z.ZodType<UserPartialWithRelations> = UserPartialSchema.merge(z.object({
  account: z.lazy(() => AccountPartialWithRelationsSchema).array(),
  role: z.lazy(() => RolePartialWithRelationsSchema).array(),
  session: z.lazy(() => SessionPartialWithRelationsSchema).array(),
})).partial()

export type UserWithPartialRelations = z.infer<typeof UserSchema> & UserPartialRelations

export const UserWithPartialRelationsSchema: z.ZodType<UserWithPartialRelations> = UserSchema.merge(z.object({
  account: z.lazy(() => AccountPartialWithRelationsSchema).array(),
  role: z.lazy(() => RolePartialWithRelationsSchema).array(),
  session: z.lazy(() => SessionPartialWithRelationsSchema).array(),
}).partial())

export default UserSchema;
