import { useState } from "react";

export const useFileUploader = (onChange) => {
  const [file, setFile] = useState();
  const onFileUpload = (event) => {
    const { files } = event.target;
    const selectedFiles = files;
    if (!!selectedFiles?.[0]) {
      setFile(selectedFiles?.[0]);
      onChange?.(event);
    }
  };
  return [file, onFileUpload, setFile];
};
