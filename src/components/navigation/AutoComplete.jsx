import React, { useContext } from "react";
import { ResultsContext } from "../../context/resultsContext";
import { FilterContext, ButtonContext } from "../../context/filterContext";
import "../../styles/autocomplete.css";

function AutoComplete() {
  const { setButtonUpdate } = useContext(ButtonContext);
  const { setFilterUpdate } = useContext(FilterContext);
  const { results } = useContext(ResultsContext);

  const setClick = (e) => {
    e.preventDefault();
    setButtonUpdate(true);
    console.log(e.target.innerText);
    setFilterUpdate(e.target.innerText);
  };

  return (
    <>
      {results.length > 0 ? (
        <div className="autocomplete_container">
          <ul className="autocomplete_subcontainer">
            {results.map((data, index) => {
              return (
                <div key={index} className="list_subcontainer">
                    <img src="../../assets/icons/icon-search.svg" alt="search-icon" />
                    <li onClick={setClick}>{data.name}</li>
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
