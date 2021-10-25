import React, { useState, createContext, useEffect, useContext } from "react";
import { FilterContext, ButtonContext } from "../context/filterContext";
import { urlTrending, urlSearch, apiKey, qty } from "../helpers/variables";

export const ResultsContext = createContext();

export default function ResultsProvider({ children }) {
  const [results, setResults] = useState([]);
  const { filter } = useContext(FilterContext);
  const { button } = useContext(ButtonContext);

  //Cargar los primeros gifs
  useEffect(() => {
    if (
      (filter === "" || filter === undefined || filter === null) && button === false ) {
      try {
        (async () => {
          const res = await fetch(`${urlTrending}?api_key=${apiKey}&limit=${qty}&rating=g&lang=en`);
          const data = await res.json();
          setResults(data.data);
        })();
      } catch (e) {
        console.log(e);
      }
    }
  });

  //carga los gifs de la búsqueda
  useEffect(() => {
    if ( filter !== "" && filter !== undefined && filter !== null && button === true ) {
      try {
        (async () => {
          const res = await fetch(`${urlSearch}?api_key=${apiKey}&q=(encodeURI(${filter}))&limit=${qty}&offset=0&rating=g&lang=en`);
          const data = await res.json();
          setResults(data.data);
        })();
      } catch (e) {
        console.log(e);
      }
    }
  }, [filter, button]);

  return (
    <ResultsContext.Provider value={{ results }}>
      {children}
    </ResultsContext.Provider>
  );
}
