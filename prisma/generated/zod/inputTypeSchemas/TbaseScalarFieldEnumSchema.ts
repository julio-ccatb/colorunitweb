import { z } from 'zod';

export const TbaseScalarFieldEnumSchema = z.enum(['id','description','shortcode','peso1','peso2','peso3','peso4','peso5','createdAt','updatedAt']);

export default TbaseScalarFieldEnumSchema;
