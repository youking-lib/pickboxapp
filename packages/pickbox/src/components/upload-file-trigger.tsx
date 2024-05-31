import { useRef } from "react";
import { Button } from "@radix-ui/themes";
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
        hidden
        multiple
        type="file"
        ref={fileInputRef}
        onChange={e => {
          const files = e.target.files || [];

          if (files.length > 0) {
            dispatch(state =>
              StateMutations.setUploadFiles(state, Array.from(files))
            );
          }
        }}
      />
    </>
  );
}
