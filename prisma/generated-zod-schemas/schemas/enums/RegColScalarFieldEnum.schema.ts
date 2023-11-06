import { z } from 'zod';

export const RegColScalarFieldEnumSchema = z.enum([
  'id',
  'description',
  'carta',
  'R',
  'G',
  'B',
  'pesopromedio',
  'brillo',
  'active',
  'coeficienteG',
  'createdAt',
  'updatedAt',
]);
