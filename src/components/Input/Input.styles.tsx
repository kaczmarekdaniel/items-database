import styled from "styled-components";

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

export const StyledInput = styled.input`
  border: 1px solid gray;
  padding: 4px;
  height: 32px;
  font-size: 16px;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: blue;
  }
`;
