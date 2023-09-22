import React from "react";
import { Wrapper } from "./SubmitButton.styles";

const SubmitButton = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default SubmitButton;
