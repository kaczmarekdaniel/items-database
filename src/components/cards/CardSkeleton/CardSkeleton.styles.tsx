import styled from "styled-components";

export const CardSkeletonWrapper = styled.div`
  width: 280px;
  height: 155px;
  padding: 16px;
  display: flex;
  background: ${(props) => props.theme.mainDark};
  border-radius: 20px;

  animation: loading 1s infinite;

  @keyframes loading {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }

    100% {
      opacity: 1;
    }
  }
`;
