import { z } from 'zod';

export const BaseScalarFieldEnumSchema = z.enum([
  'id',
  'reforiginal',
  'tbaseId',
  'createdAt',
  'updatedAt',
  'slang',
]);
