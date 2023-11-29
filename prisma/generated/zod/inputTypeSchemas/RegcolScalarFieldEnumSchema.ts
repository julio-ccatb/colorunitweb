import { z } from 'zod';

export const RegcolScalarFieldEnumSchema = z.enum(['id','description','carta','R','G','B','pesopromedio','brillo','active','coeficienteG','createdAt','updatedAt','tbaseId','process']);

export default RegcolScalarFieldEnumSchema;
