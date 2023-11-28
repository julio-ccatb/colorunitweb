import { z } from 'zod';

export const ColorantScalarFieldEnumSchema = z.enum(['id','description','shortcode','active','gramUP','gramUG','createdAt','updatedAt']);

export default ColorantScalarFieldEnumSchema;
