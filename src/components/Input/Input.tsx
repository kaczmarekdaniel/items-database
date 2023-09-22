import React, { ForwardedRef } from "react";
import { InputWrapper, StyledInput, InputLabel } from "./Input.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  textarea?: boolean;
}

const Input = React.forwardRef(
  (
    {
      name = "label",
      label = "test",
      type = "text",
      textarea = false,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const InputElement = textarea ? "textarea" : "input";

    return (
      <InputWrapper>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <StyledInput
          as={InputElement}
          ref={ref}
          type={type}
          name={name}
          {...rest}
        />
      </InputWrapper>
    );
  }
);

export default Input;
