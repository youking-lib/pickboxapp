import { Theme, Flex, Box } from "@radix-ui/themes";
import { UploadFileTrigger } from "./components/upload-file-trigger";
import { ReceiveCodeInput } from "./components/receive-code-input";
import { UploadProgress } from "./components/upload-progress";
import { ModelProvider } from "./model/provider";
import { useSelector } from "./hooks";
import { StateSelectors } from "./model";

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
        <Box>
          <UploadFileTrigger />
        </Box>

        <Box flexGrow="1">
          <ReceiveCodeInput />
        </Box>
      </Flex>

      {variant === "uploading" && <UploadProgress />}
    </>
  );
}
