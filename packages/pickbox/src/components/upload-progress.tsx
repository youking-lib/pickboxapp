import { Table } from "@radix-ui/themes";
import { useSelector } from "../hooks";
import { StateSelectors, UploadingFile } from "../model";

type UploadProgressProps = {};

export function UploadProgress(props: UploadProgressProps) {
  const uploadingState = useSelector(StateSelectors.getUploadingState);

  return (
    <Table.Root variant="surface" mt="2">
      <Table.Body>
        {uploadingState.uploadFiles.map((item, index) => {
          return (
            <UploadingItem key={item.id} uploadingFile={item} index={index} />
          );
        })}
      </Table.Body>
    </Table.Root>
  );
}

function UploadingItem({
  uploadingFile,
  index,
}: {
  index: number;
  uploadingFile: UploadingFile;
}) {
  return (
    <Table.Row key={uploadingFile.id}>
      <Table.RowHeaderCell>
        {index + 1}. {uploadingFile.file.name}
      </Table.RowHeaderCell>
      <Table.Cell align="right">
        {fileSizeFormat(uploadingFile.progress * uploadingFile.file.size)}/
        {fileSizeFormat(uploadingFile.file.size)}
      </Table.Cell>
    </Table.Row>
  );
}

const kb = 1024;
const mb = kb * kb;
const gb = mb * kb;

const fileSizeFormat = (size: number) => {
  if (size <= 0) {
    return 0;
  }

  if (size < mb) {
    return (size / kb).toFixed(1) + "kb";
  }

  if (size < gb) {
    return (size / mb).toFixed(1) + "mb";
  }

  return (size / gb).toFixed(1) + "gb";
};
