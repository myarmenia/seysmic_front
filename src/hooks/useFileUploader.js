import { useState } from "react";

export const useFileUploader = (onChange) => {
  const [file, setFile] = useState();
  const onFileUpload = (event) => {
    const { files } = event.target;
    if (!!files?.[0]) {
      setFile(files?.[0]);
      onChange?.(event);
    }
  };
  return [file, onFileUpload, setFile];
};
