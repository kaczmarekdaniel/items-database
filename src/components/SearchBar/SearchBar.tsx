import React from "react";

import { SearchBarWrapper, SearchInput } from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchInput type="text" placeholder="search" />
    </SearchBarWrapper>
  );
};

export default SearchBar;
