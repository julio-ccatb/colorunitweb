import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleIncludeSchema } from '../inputTypeSchemas/RoleIncludeSchema'
import { RoleWhereUniqueInputSchema } from '../inputTypeSchemas/RoleWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoleSelectSchema: z.ZodType<Prisma.RoleSelect> = z.object({
  roleId: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const RoleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoleFindUniqueOrThrowArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema,
}).strict()

export default RoleFindUniqueOrThrowArgsSchema;
