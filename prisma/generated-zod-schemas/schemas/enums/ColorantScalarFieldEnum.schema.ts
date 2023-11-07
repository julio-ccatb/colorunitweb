import { z } from 'zod';

export const ColorantScalarFieldEnumSchema = z.enum([
  'id',
  'description',
  'shortcode',
  'basecodi',
  'gramUP',
  'gramUG',
  'createdAt',
  'updatedAt',
]);
