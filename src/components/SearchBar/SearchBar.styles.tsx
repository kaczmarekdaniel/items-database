import styled from "styled-components";

export const SearchBarWrapper = styled.div``;

export const SearchInput = styled.input`
  width: 285px;
  height: 40px;
  background: ${(props) => props.theme.mainDark};
  border-radius: 10px;
  border: none;
  font-size: 14px;

  font-weight: 200;
  color: #fff;
  padding-left: 24px;
`;
