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

export function PickboxIsland() {
  return (
    <Theme data-is-root-theme="false">
      <Flex gap="2" width="540px" align="center">
        <Box>
          <Button size="3" variant="soft">
            <PlusCircledIcon />
            SAVE
          </Button>
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
