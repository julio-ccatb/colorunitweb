import { z } from 'zod';

export const RegcolScalarFieldEnumSchema = z.enum(['id','description','carta','R','G','B','tbaseId','process','pesopromedio','brillo','active','coeficienteG','createdAt','updatedAt']);

export default RegcolScalarFieldEnumSchema;
