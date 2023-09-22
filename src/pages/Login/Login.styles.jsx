import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 730px;
  height: 400px;
  margin: auto;
  background: ${(props) => props.theme.mainDark};

  border-radius: 20px;
  box-shadow: 8px 8px 24px 0px ${(props) => props.theme.mainDark};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  flex-direction: row;

  h1 {
    margin-bottom: 20px;
  }

  img {
    max-height: 100%;
    width: 395px;
    box-shadow: inset 8px -0px 24px 0px rgba(66, 68, 90, 1);
  }
`;

export const LoginForm = styled.form`
  padding: 30px 0;

  width: 416px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
