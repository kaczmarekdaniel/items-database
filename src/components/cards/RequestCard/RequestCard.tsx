import React from "react";

import {
  Wrapper,
  ProductImage,
  ProductTitle,
  ProductInfo,
  ProductButton,
} from "./RequestCard.styles";

interface RequestProps {
  id: string;
  title: string;
  ItemId: string;
  userId: string;
}

interface Props {
  request: RequestProps;
}

const RequestCard: React.FC<Props> = ({ request }) => {
  // console.log("xd", item);

  if (!request) return <p>Loading</p>;

  return (
    <Wrapper>
      <ProductInfo>
        <ProductTitle>{request.title}</ProductTitle>
        <ProductButton>see more</ProductButton>
      </ProductInfo>
    </Wrapper>
  );
};

export default RequestCard;
