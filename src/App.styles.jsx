import styled from "styled-components";

export const MainWrapper = styled.div`
  min-height: 100vh;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.color};

  p {
    font-weight: 200;
  }
`;

export const ContentWrapper = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  background: ${(props) => props.theme.main};

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
