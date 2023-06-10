import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState(9999);

  const updateSearchValue = (value) => {
    setSearchValue(value);
    console.log(searchValue);
  };

  return (
    <SearchContext.Provider value={{ searchValue, updateSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
