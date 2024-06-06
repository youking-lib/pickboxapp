import { Flex, Link, Separator, Spinner, Text } from "@radix-ui/themes";
import { useSelector } from "../hooks";
import { StateSelectors } from "../model";

export function UploadingBar() {
  const token = useSelector(StateSelectors.getUploadingToken);
  const uploadingFiles = useSelector(StateSelectors.getUploadingFiles);
  const uploadSuccessFiles = useSelector(
    state => StateSelectors.getUploadingFilesByStatus(state, "success"),
    [uploadingFiles]
  );

  return (
    <Flex
      gap="3"
      align="center"
      py="2"
      px="2"
      style={{
        borderRadius: "max(var(--radius-2), var(--radius-full))",
        backgroundColor: "var(--accent-a3)",
      }}
    >
      {/* <Flex align="center" gap="1">
        <Spinner size="1" />
        <Link
          href={`https://pickbox.app/${token?.token}`}
          style={{ cursor: "wait" }}
        >
          {token?.token}
        </Link>
      </Flex>
      <Separator orientation="vertical" /> */}
      <Text color="gray" size="1">
        Uploading Progress: {uploadSuccessFiles.length}/{uploadingFiles.length}
      </Text>
    </Flex>
  );
}
