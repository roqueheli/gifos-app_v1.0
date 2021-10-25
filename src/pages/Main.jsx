import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Results from "../components/Results";
import FilterProvider from "../context/filterContext";
import ResultsProvider from "../context/resultsContext";
import AutoCompleteProvider from "../context/autocompleteContext";
import "../App.css";

function Main() {
  return (
    <div className="App">
      <Header />
      <FilterProvider>
        <ResultsProvider>
          <AutoCompleteProvider>
            <Filter />
            <Results />
          </AutoCompleteProvider>
        </ResultsProvider>
      </FilterProvider>
    </div>
  );
}

export default Main;
