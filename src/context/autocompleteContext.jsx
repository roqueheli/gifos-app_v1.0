import React, { useState, createContext, useEffect, useContext } from "react";
import { FilterContext } from "../context/filterContext";
import { urlAutoComplete, apiKey, autoQty } from "../helpers/variables";

export const AutoCompleteContext = createContext();

export default function AutoCompleteProvider({ children }) {
  const [ autocomplete, setAutoComplete ] = useState([]);
  const { filter } = useContext(FilterContext);

  //Cargar los primeros gifs
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(`${urlAutoComplete}?api_key=${apiKey}&q=(${filter})&limit=${autoQty}&offset=0&rating=g&lang=en`);
        const data = await res.json();
        setAutoComplete(data.data);
      })();
    } catch (e) {
      console.error(e);
    }
  }, [filter]);

  return (
    <AutoCompleteContext.Provider value={ { autocomplete } }>
      {children}
    </AutoCompleteContext.Provider>
  );
}
