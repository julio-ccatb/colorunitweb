import { z } from 'zod';

export const PostScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'createdAt',
  'updatedAt',
  'createdById',
]);
