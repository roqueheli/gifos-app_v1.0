import React, { useState, createContext } from "react";

export const AutoCompleteContext = createContext();

export default function AutoCompleteProvider({ children }) {
  const [ autocomplete, setAutoComplete ] = useState([]);

  return (
    <AutoCompleteContext.Provider value={ { autocomplete, setAutoComplete } }>
      {children}
    </AutoCompleteContext.Provider>
  );
}
