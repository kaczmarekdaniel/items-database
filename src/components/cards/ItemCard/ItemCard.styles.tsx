import styled from "styled-components";

export const Wrapper = styled.article`
  width: 280px;
  height: 155px;
  padding: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  border-radius: 20px;

  background: ${(props) => props.theme.mainDark};
`;

export const ProductTitle = styled.h3`
  text-align: center;
  font-size: 18px;
`;

export const ProductButton = styled.button`
  width: 74px;
  height: 24px;
  background: ${(props) => props.theme.mainLight};
  border: none;
  color: ${(props) => props.theme.mainDark};
  cursor: pointer;

  border-radius: 5px;

  &:hover {
  }
`;

export const ProductInfo = styled.div`
  width: auto;
  height: 100%;
  padding-left: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;
