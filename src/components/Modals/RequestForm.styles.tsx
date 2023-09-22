import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Input = styled.input`
  width: 320px;
  height: 38px;

  border-radius: 0 10px 10px 10px;
  border: 1px solid ${(props) => props.theme.mainLight};
  color: ${(props) => props.theme.mainLight};
  font-size: 16px;
  padding: 0 15px;
  background: transparent;
`;

export const Textarea = styled.textarea`
  width: 320px;
  height: auto;
  min-height: 72px;

  border-radius: 0 10px 10px 10px;
  border: 1px solid ${(props) => props.theme.mainLight};
  color: ${(props) => props.theme.mainLight};
  font-size: 16px;
  padding: 0 20px;
  background: transparent;
`;

export const FileInput = styled.input`
  width: 320px;
  height: 38px;

  border-radius: 0 10px 10px 10px;
  border: 1px solid ${(props) => props.theme.mainLight};
  color: ${(props) => props.theme.mainLight};
  font-size: 16px;
  padding: 0 15px;
  background: transparent;
`;

export const InputWrapper = styled.div`
  padding: 5px 0;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-weight: 200;
  font-size: 14px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0 24px;

  height: 38px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.mainLight};
  color: ${(props) => props.theme.mainLight};
  font-size: 16px;
  background: transparent;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  height: 38px;
  padding: 0 24px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.mainLight};
  color: ${(props) => props.theme.mainLight};
  font-size: 16px;
  background: transparent;
  cursor: pointer;
`;

export const FilePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FilePicker = styled.input.attrs({
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
