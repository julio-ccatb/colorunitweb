import { z } from 'zod';

export const ColorantScalarFieldEnumSchema = z.enum(['id','description','shortcode','gramUP','gramUG','createdAt','updatedAt','active']);

export default ColorantScalarFieldEnumSchema;
