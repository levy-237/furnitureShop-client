import React, { useState, useEffect } from "react";

import { starReviewDisplay } from "./Helpers/starReviewDisplay";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [searchInput, setSearchInput] = useState("");
  const [rating, setRating] = useState(null);

  return (
    <Context.Provider
      value={{
        searchInput,
        setSearchInput,
        rating,
        setRating,
        starReviewDisplay,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
