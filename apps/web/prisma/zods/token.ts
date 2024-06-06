import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteFile, RelatedFileModel } from "./index"

export const TokenModel = z.object({
  id: z.string(),
  token: z.string(),
  expires: z.date().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string().nullish(),
})

export interface CompleteToken extends z.infer<typeof TokenModel> {
  user?: CompleteUser | null
  File: CompleteFile[]
}

/**
 * RelatedTokenModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTokenModel: z.ZodSchema<CompleteToken> = z.lazy(() => TokenModel.extend({
  user: RelatedUserModel.nullish(),
  File: RelatedFileModel.array(),
}))
