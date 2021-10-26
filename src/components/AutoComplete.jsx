import React, { useContext } from "react";
import { FilterContext, ButtonContext } from "../context/filterContext";
import { AutoCompleteContext } from "../context/autocompleteContext";
import "../styles/autocomplete.css";

function AutoComplete() {
  const { setButtonUpdate } = useContext(ButtonContext);
  const { setFilterUpdate } = useContext(FilterContext);
  const { autocomplete } = useContext(AutoCompleteContext);
  

  const setClick = (e) => {
    e.preventDefault();
    setButtonUpdate(true);
    setFilterUpdate(e.target.innerText);
  };

  return (
    <>
      {autocomplete.length > 0 ? (
        <div className="autocomplete_container">
          <ul className="autocomplete_subcontainer">
            {autocomplete.map((data, index) => {
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
