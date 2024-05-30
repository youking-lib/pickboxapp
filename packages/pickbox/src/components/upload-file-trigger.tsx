import { useRef } from "react";
import { Box, Button } from "@radix-ui/themes";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useDispatch } from "../hooks";
import { StateMutations } from "../model";

export function UploadFileTrigger() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  return (
    <>
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

      <input
        type="file"
        hidden
        ref={fileInputRef}
        onChange={e => {
          const files = e.target.files || [];

          dispatch(state =>
            StateMutations.setUploadFiles(state, Array.from(files))
          );
        }}
      />
    </>
  );
}
