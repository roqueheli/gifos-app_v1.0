import React, { useState, createContext, useEffect } from "react";
import { urlTrending, apiKey, qty } from "../helpers/variables";

export const ResultsContext = createContext();

export default function ResultsProvider({ children }) {
  const [ results, setResults ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  //Cargar los primeros gifs
  useEffect(() => {
      try {
        (async () => {
          const res = await fetch(`${urlTrending}?api_key=${apiKey}&limit=${qty}&rating=g&lang=en`);
          const data = await res.json();
          setResults(data.data);
          setLoading(true);
        })();
      } catch (e) {
    }
  }, []);

  return (
    <ResultsContext.Provider value={{ results, setResults, loading, setLoading }}>
      {children}
    </ResultsContext.Provider>
  );
}
