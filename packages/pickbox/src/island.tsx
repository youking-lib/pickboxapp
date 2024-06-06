import { Theme, Flex, Box } from "@radix-ui/themes";
import { UploadFileTrigger } from "./components/upload-file-trigger";
import { ReceiveCodeInput } from "./components/receive-code-input";
import { UploadProgress } from "./components/uploading-progress";
import { ModelProvider } from "./model/provider";
import { useSelector } from "./hooks";
import { StateSelectors } from "./model";
import { UploadingBar } from "./components/uploading-bar";

export function Island() {
  return (
    <ModelProvider>
      <Theme data-is-root-theme="false">
        <Main />
      </Theme>
    </ModelProvider>
  );
}

function Main() {
  const variant = useSelector(StateSelectors.getViewVariant);

  return (
    <>
      <Flex gap="2" width="540px" align="center">
        <Box flexGrow="1">
          {variant === "default" && <ReceiveCodeInput />}

          {variant === "uploading" && <UploadingBar />}
        </Box>

        <Flex gap="2" justify="between">
          <UploadFileTrigger />
        </Flex>
      </Flex>

      {variant === "uploading" && <UploadProgress />}
    </>
  );
}
