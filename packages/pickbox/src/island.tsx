import {
  Theme,
  Flex,
  Box,
  Button,
  TextField,
  IconButton,
} from "@radix-ui/themes";
import {
  LockClosedIcon,
  PaperPlaneIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import { fileApi } from "@repo/api-client/src";
import { useRef } from "react";

export function Island() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <Theme data-is-root-theme="false">
      <Flex gap="2" width="540px" align="center">
        <Box>
          <Button
            size="3"
            variant="soft"
            onClick={() => {
              fileInputRef.current?.click();
            }}
          >
            <PlusCircledIcon />
            SAVE
          </Button>

          <input type="file" hidden ref={fileInputRef} onChange={e => {}} />
        </Box>

        <Box flexGrow="1">
          <TextField.Root
            variant="soft"
            size="3"
            placeholder="RECEIVE BY PICK-UP CODE"
          >
            <TextField.Slot>
              <IconButton size="1" variant="ghost">
                <LockClosedIcon />
              </IconButton>
            </TextField.Slot>

            <TextField.Slot>
              <IconButton size="1" variant="ghost">
                <PaperPlaneIcon />
              </IconButton>
            </TextField.Slot>
          </TextField.Root>
        </Box>
      </Flex>
    </Theme>
  );
}
