import React from "react";
import Header from "../components/header/Header";
import Filter from "../components/navigation/Filter";
import Results from "../components/main/Results";
import Footer from "../components/footer/Footer";
import FilterProvider from "../context/filterContext";
import ResultsProvider from "../context/resultsContext";
import AutoCompleteProvider from "../context/autocompleteContext";
import "../styles/App.css";

function Main() {
  return (
    <div className="App">
      <FilterProvider>
        <ResultsProvider>
          <AutoCompleteProvider>
            <Header />
            <Filter />
            <Results />
          </AutoCompleteProvider>
        </ResultsProvider>
      </FilterProvider>
      <Footer />
    </div>
  );
}

export default Main;
