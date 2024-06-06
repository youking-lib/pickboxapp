import { useState } from "react";
import { TextField, IconButton, Button } from "@radix-ui/themes";
import { LockClosedIcon, PaperPlaneIcon } from "@radix-ui/react-icons";

export function ReceiveCodeInput() {
  const [code, setCode] = useState("");

  return (
    <TextField.Root
      variant="soft"
      size="2"
      placeholder="RECEIVE BY PICK-UP CODE"
      value={code}
      onChange={e => {
        setCode(e.target.value);
      }}
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
