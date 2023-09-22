import React, { useState } from "react";
import {
  FilePickerContainer,
  FilePickerLabel,
  SelectedFileName,
} from "./FilePicker.styles";

type FileInputProps = {
  id: string;
  type: string;
  accept: string;
  name: string;
  onSelect: (file?: File) => void;
};

function FileInput({ id, type, accept, name, onSelect }: FileInputProps) {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
    onSelect(file);
  };

  return (
    <>
      <input
        id={id}
        type={type}
        accept={accept}
        name={name}
        onChange={handleFileSelect}
      />
      {selectedFile && <SelectedFileName>{selectedFile.name}</SelectedFileName>}
    </>
  );
}

type FilePickerProps = {
  id: string;
  type: string;
  accept: string;
  name: string;
  onSelect: (file?: File) => void;
};

function FilePicker({ id, type, accept, name, onSelect }: FilePickerProps) {
  return (
    <FilePickerContainer>
      <input type="file" accept="image/*" {...register("image")} name="image" />
      <FilePickerLabel htmlFor={id}>Choose file</FilePickerLabel>
    </FilePickerContainer>
  );
}

export default FilePicker;
