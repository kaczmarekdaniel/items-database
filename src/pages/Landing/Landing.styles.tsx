import styled from "styled-components";

export const LandingWrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const LandingTop = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  .left {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const LandingDetails = styled.div`
  margin-top: 78px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
`;
