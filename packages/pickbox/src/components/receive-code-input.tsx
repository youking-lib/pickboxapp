import { Theme, Flex, Box, TextField, IconButton } from "@radix-ui/themes";
import { LockClosedIcon, PaperPlaneIcon } from "@radix-ui/react-icons";

export function ReceiveCodeInput() {
  return (
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
  );
}
