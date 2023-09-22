import React from "react";

import {
  Wrapper,
  ProductImage,
  ProductTitle,
  ProductInfo,
  ProductButton,
} from "./ItemCard.styles";

interface ItemProps {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  serial_number: string;
  placeholder: string;
}

interface Props {
  item: ItemProps;
}

const ItemCard: React.FC<Props> = ({ item }) => {
  // console.log("xd", item);

  if (!item) return <p>Loading</p>;

  return (
    <Wrapper>
      <ProductImage src={item.placeholder} />
      <ProductInfo>
        <ProductTitle>
          {item.manufacturer} <br /> {item.model}
        </ProductTitle>
        <ProductButton>details</ProductButton>
      </ProductInfo>
    </Wrapper>
  );
};

export default ItemCard;
