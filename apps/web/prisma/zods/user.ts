import * as z from "zod"
import { CompleteKey, RelatedKeyModel, CompleteSession, RelatedSessionModel, CompleteToken, RelatedTokenModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  avatar: z.string().nullish(),
  anonymous: z.boolean(),
  createdAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  key: CompleteKey[]
  auth_session: CompleteSession[]
  token: CompleteToken[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  key: RelatedKeyModel.array(),
  auth_session: RelatedSessionModel.array(),
  token: RelatedTokenModel.array(),
}))
