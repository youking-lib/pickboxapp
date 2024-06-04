import * as z from "zod"
import { CompleteToken, RelatedTokenModel, CompleteFile, RelatedFileModel } from "./index"

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
  token: CompleteToken[]
  File: CompleteFile[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  token: RelatedTokenModel.array(),
  File: RelatedFileModel.array(),
}))
