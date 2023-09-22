import styled from "styled-components";

export const RequestsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 26px;
  h2 {
    text-align: left;
    width: 50%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 16px;
  }

  a {
    width: 10%;
    padding-right: 5px;

    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-bottom: 16px;
  }
`;

export const YourRequestsListing = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;

  article:not(:first-of-type) {
    margin-left: 24px;
  }
`;

export const FormButton = styled.button`
  width: 40%;
  margin-bottom: 16px;
  color: inherit;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: none;
  text-align: right;
  background: none;
  font-size: 15px;
  line-height: 28px;
  cursor: pointer;
`;
