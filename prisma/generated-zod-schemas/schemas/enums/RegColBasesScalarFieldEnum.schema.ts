import { z } from 'zod';

export const RegColBasesScalarFieldEnumSchema = z.enum([
  'id',
  'regColId',
  'baseId',
  'amount',
]);
