import React from "react";
import PropTypes from "prop-types";

import { CardSkeletonWrapper } from "./CardSkeleton.styles";

interface Props {
  count: number;
}

const CardSkeleton = ({ count }: Props) => {
  const skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(<CardSkeletonWrapper key={i}>test</CardSkeletonWrapper>);
  }
  return <>{skeletons}</>;
};

CardSkeleton.propTypes = {};

export default CardSkeleton;
