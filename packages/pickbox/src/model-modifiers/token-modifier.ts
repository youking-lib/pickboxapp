import { ModelState, Token } from "../model";

export const TokenModifier = {
  setUploadingToken(state: ModelState, token: Token) {
    return ModelState.set(state, draft => {
      draft.viewState.uploading.token = token;
    });
  },
};
