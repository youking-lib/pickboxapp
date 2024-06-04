import { useRef } from "react";
import { Button } from "@radix-ui/themes";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useModel } from "../hooks";
import { UploadModifier } from "../model-modifiers";

export function UploadFileTrigger() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useModel().dispatch;

  const onUploadFiles = (files: File[]) => {
    if (files.length > 0) {
      dispatch(state =>
        UploadModifier.setUploadFiles(state, Array.from(files))
      );
    }
  };

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
          const files = Array.from(e.target.files || []);

          onUploadFiles(files);
        }}
      />
    </>
  );
}
