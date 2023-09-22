import styled from "styled-components";
import ItemCard from "../cards/ItemCard/ItemCard";

export const YourItemsWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  h2 {
    text-align: left;
    width: 50%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-top: 62px;
    margin-bottom: 16px;
  }
`;

export const YourItemsListing = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 26px;
  article {
    margin-bottom: 16px;
  }

  @media (min-width: 1200px) {
    article:nth-of-type(n + 5) {
      display: none;
    }
  }
`;

export const SeeAll = styled.button`
  width: 200px;
  height: 30px;
  padding-right: 5px;
  background: transparent;
  border: none;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #d5d3d2;
  font-size: 16px;
  cursor: pointer;

  margin-top: 62px;
  margin-bottom: 16px;
  margin-left: auto;
`;
