import React, { useContext } from "react";
import { NoResults } from "./NoResults";
import Loader from '../components/Loader'
import { ModeContext } from "../context/modeContext";
import { ResultsContext } from "../context/resultsContext";
import { ButtonContext } from '../context/filterContext';
import "../styles/results.css";

const Card = ({ url }) => {
  return (
  <a className="card_container" href={url} target="_blank" rel="noopener noreferrer">
    <img src={url} alt="Gif" />
  </a>)
};

const Results = () => {
  const { mode } = useContext(ModeContext);
  const { results } = useContext(ResultsContext);
  const { button } = useContext(ButtonContext);

  return (
    <div className={mode ? "results_container night_mode" : "results_container day_mode"}>
      <div className={mode ? "results_subcontainer night_mode" : "results_subcontainer day_mode"}>
        {(results.length > 0) ?
          results.map((data, index) => { 
            return(<Card key={index} url={data.images?.downsized_medium.url} />);
          }) : (results.length === 0 && button === false) ? <Loader /> 
             : (results.length === 0 && button === true) ? <NoResults /> : null}
      </div>
    </div>
  );
};

export default Results;
