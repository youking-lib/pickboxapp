import * as z from "zod"
import { CompleteToken, RelatedTokenModel } from "./index"

export const FileModel = z.object({
  id: z.string(),
  key: z.string(),
  hash: z.string(),
  name: z.string(),
  size: z.number(),
  type: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  tokenId: z.string().nullish(),
})

export interface CompleteFile extends z.infer<typeof FileModel> {
  token?: CompleteToken | null
}

/**
 * RelatedFileModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedFileModel: z.ZodSchema<CompleteFile> = z.lazy(() => FileModel.extend({
  token: RelatedTokenModel.nullish(),
}))
