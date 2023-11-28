import { z } from 'zod';

export const RoleScalarFieldEnumSchema = z.enum(['roleId','userId']);

export default RoleScalarFieldEnumSchema;
