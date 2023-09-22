import styled from "styled-components";

export const Wrapper = styled.button`
  width: 120px;
  height: 34px;

  margin: 24px 0;
  border-radius: 10px;
  background: ${(props) => props.theme.mainLight};
  border: none;
  color: ${(props) => props.theme.mainDark};
  font-size: 16px;
  font-weight: 300;
`;
