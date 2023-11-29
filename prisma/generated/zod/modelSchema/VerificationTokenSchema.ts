import { z } from 'zod';

/////////////////////////////////////////
// VERIFICATIONTOKEN SCHEMA
/////////////////////////////////////////

export const VerificationtokenSchema = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
})

export type Verificationtoken = z.infer<typeof VerificationtokenSchema>

/////////////////////////////////////////
// VERIFICATIONTOKEN PARTIAL SCHEMA
/////////////////////////////////////////

export const VerificationtokenPartialSchema = VerificationtokenSchema.partial()

export type VerificationtokenPartial = z.infer<typeof VerificationtokenPartialSchema>

export default VerificationtokenSchema;
