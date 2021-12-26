import React, { useContext } from "react";
import { AutoCompleteContext } from "../../context/autocompleteContext";
import { ResultsContext } from "../../context/resultsContext";
import { FilterContext } from "../../context/filterContext";
import { urlSearch, apiKey, qty } from "../../helpers/variables";
import "../../styles/autocomplete.css";

function AutoComplete() {
  const { filter, setFilterUpdate } = useContext(FilterContext);
  const { autocomplete, setAutoComplete } = useContext(AutoCompleteContext);
  const { setLoading, setResults } = useContext(ResultsContext);

  //carga los gifs de la búsqueda
  const handleAutoComplete = (name) => {
    if (name) {
      try {
        (async () => {
          const res = await fetch(`${urlSearch}?api_key=${apiKey}&q=(encodeURI(${name}))&limit=${qty}&offset=0&rating=g&lang=en`);
          const data = await res.json();
          setResults(data.data);
          setAutoComplete([]);
          setFilterUpdate('');
          setLoading(true);
      })();
      } catch (e) {
      }
    }
  }

  return (
    <>
      {filter.length > 0 ? (
        <div className="autocomplete_container">
          <ul className="autocomplete_subcontainer">
            {autocomplete.map((data, index) => {
              return (
                <div key={index} className="list_subcontainer">
                    <img onClick={() => handleAutoComplete(data.name)} src="../../assets/icons/icon-search.svg" alt="search-icon" />
                    <li>{data.name}</li>
                </div>
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default AutoComplete;
