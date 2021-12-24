import React, { useContext } from "react";
import { NoResults } from "../main/NoResults";
import Loader from '../main/Loader'
import { ModeContext } from "../../context/modeContext";
import { ResultsContext } from "../../context/resultsContext";
import "../../styles/results.css";

const Card = ({ url }) => {
  return (
  <a className="card_container" href={url} target="_blank" rel="noopener noreferrer">
    <img src={url} alt="Gif" />
  </a>)
};

const Results = () => {
  const { mode } = useContext(ModeContext);
  const { results, loading } = useContext(ResultsContext);

  return (
    <main className={mode ? "results_container night_mode" : "results_container day_mode"}>
      <section className={mode ? "results_subcontainer night_mode" : "results_subcontainer day_mode"}>
        {(!loading) ? <Loader /> :
          ((results.length > 0) ?
            results.map((data, index) => { 
            return(
              <Card key={index} url={data.images?.downsized_medium.url} />
            );
          }) : <NoResults />)}
      </section>
    </main>
  );
};

export default Results;
