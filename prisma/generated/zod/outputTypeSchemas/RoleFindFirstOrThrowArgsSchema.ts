import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleIncludeSchema } from '../inputTypeSchemas/RoleIncludeSchema'
import { RoleWhereInputSchema } from '../inputTypeSchemas/RoleWhereInputSchema'
import { RoleOrderByWithRelationInputSchema } from '../inputTypeSchemas/RoleOrderByWithRelationInputSchema'
import { RoleWhereUniqueInputSchema } from '../inputTypeSchemas/RoleWhereUniqueInputSchema'
import { RoleScalarFieldEnumSchema } from '../inputTypeSchemas/RoleScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoleSelectSchema: z.ZodType<Prisma.RoleSelect> = z.object({
  roleId: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const RoleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoleFindFirstOrThrowArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema,RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default RoleFindFirstOrThrowArgsSchema;
