import { z } from 'zod';

export const VerificationtokenScalarFieldEnumSchema = z.enum(['identifier','token','expires']);

export default VerificationtokenScalarFieldEnumSchema;
