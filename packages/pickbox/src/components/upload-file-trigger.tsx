import { useRef } from "react";
import { Button } from "@radix-ui/themes";
import { PlusCircledIcon, ResetIcon } from "@radix-ui/react-icons";
import { useModel, useSelector } from "../hooks";
import { UploadModifier } from "../model-modifiers";
import { StateSelectors } from "../model";

export function UploadFileTrigger() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const variant = useSelector(StateSelectors.getViewVariant);
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
      {variant === "uploading" && (
        <Button
          size="2"
          variant="surface"
          onClick={() => {
            fileInputRef.current?.click();
          }}
        >
          <ResetIcon />
        </Button>
      )}

      <Button
        size="2"
        variant="solid"
        onClick={() => {
          fileInputRef.current?.click();
        }}
      >
        <PlusCircledIcon />
        {variant === "default" ? "SAVE" : ""}
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
