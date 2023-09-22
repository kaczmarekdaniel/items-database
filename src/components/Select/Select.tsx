import React, { useState } from "react";
import {
  SelectWrapper,
  SelectOptions,
  SelectHeading,
  SelectOption,
} from "./Select.styles";

const Select = (props) => {
  const [active, setActive] = useState(false);

  return (
    <SelectWrapper>
      <SelectHeading active={active} onClick={() => setActive(!active)}>
        Category
      </SelectHeading>
      <SelectOptions active={active}>
        <SelectOption>1</SelectOption>
        <SelectOption>2</SelectOption>
      </SelectOptions>
    </SelectWrapper>
  );
};

export default Select;
