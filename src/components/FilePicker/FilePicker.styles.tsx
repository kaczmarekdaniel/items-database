import styled from "styled-components";

export const FilePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FilePickerInput = styled.input.attrs({
  type: "file",
})`
  display: none;
`;

export const FilePickerLabel = styled.label`
  display: inline-block;
  padding: 10px 15px;
  background-color: #0077ff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

export const SelectedFileName = styled.div`
  margin-top: 10px;
`;
