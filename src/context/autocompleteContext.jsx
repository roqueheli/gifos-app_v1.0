import React, { useState, createContext, useEffect, useContext } from "react";
import { urlAutoComplete, apiKey, autoQty } from "../helpers/variables";
import { FilterContext } from "./filterContext";

export const AutoCompleteContext = createContext();

export default function AutoCompleteProvider({ children }) {
  const { filter } = useContext(FilterContext);
  const [ autocomplete, setAutoComplete ] = useState([]);

  // Cargar los gifs de autocompletar
  useEffect(() => {
    try {
        (async () => {
            const res = await fetch(`${urlAutoComplete}?api_key=${apiKey}&q=(${filter})&limit=${autoQty}&offset=0&rating=g&lang=en`);
            const data = await res.json();
            setAutoComplete(data.data);
        })();
        } catch (e) {
        }
    }, [filter]);

  return (
    <AutoCompleteContext.Provider value={ { autocomplete, setAutoComplete } }>
      {children}
    </AutoCompleteContext.Provider>
  );
}
