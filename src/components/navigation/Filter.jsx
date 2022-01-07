import React, { useContext } from "react";
import { make } from "../../helpers/variables";
import { ModeContext } from '../../context/modeContext';
import { ResultsContext } from "../../context/resultsContext";
import "../../styles/filter.css";
import Search from "./Search";

const Filter = () => {
    const { mode } = useContext(ModeContext);
    const { results } = useContext(ResultsContext);

    return (
        <div className={mode ? "filter_container night_mode" : "filter_container day_mode"}>
            <div className={mode ? "filter_work night_mode" : "filter_work day_mode"}>
                <h1 className={mode ? "night_mode" : "day_mode"} data-text="GIFS!">¡Inspírate y busca los mejores </h1>
                <img className="filter_img" src="./assets/images/ilustra_header.svg" alt="ilustra_header" />
                <Search />
                <h2 className={mode ? "night_mode" : "day_mode"}>{(results.length) ? make.after : make.before}</h2>
            </div>
        </div>
    );
};

export default Filter;