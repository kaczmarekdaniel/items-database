import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  margin: 0 20px;
`;

export const SelectHeading = styled.button`
  width: 154px;
  height: 40px;
  text-align: left;
  padding-left: 24px;

  font-size: 14px;
  font-weight: 200;
  background: ${(props) => props.theme.mainDark};

  color: #d5d3d2;
  border: none;
  border-radius: ${(props) => (props.active ? "10px 10px 0 0" : "10px")};

  cursor: pointer;
  position: relative;
`;

export const SelectOptions = styled.div`
  position: absolute;
  display: ${(props) => (props.active ? "" : "none")};
  top: 40px;
  left: 0;
  width: 154px;
  height: 200px;
  content: "";
  background: ${(props) => props.theme.mainDark};
  border-radius: 0 0 10px 10px;
`;

export const SelectOption = styled.button`
  width: calc(100% - 20px);
  height: 28px;
  background: ${(props) => props.theme.mainLight};

  border-radius: 5px;
  border: none;
  margin: 5px 10px;
  cursor: pointer;
`;
