import React, { useContext } from "react";
import "../styles/filter.css";
import { make } from "../helpers/variables";
import { ModeContext } from '../context/modeContext';
import { FilterContext, ButtonContext } from '../context/filterContext';
import { ResultsContext } from "../context/resultsContext";
import AutoComplete from "./AutoComplete";

const Search = () => {
    const { mode } = useContext(ModeContext);
    const { filter, setFilterUpdate } = useContext(FilterContext);
    const { button, setButtonUpdate } = useContext(ButtonContext);

    const setClick = (e) => {
        e.preventDefault();
        setButtonUpdate(true);
    }

    const setFilterValue = (e) => {
        e.preventDefault();
        setFilterUpdate(e.target.value)
    }

    if (filter === '' || filter === undefined || filter === null) {
        setButtonUpdate(false);
    }

    return (
        <>
            <form className="submit_container" autoComplete="off">
                <div className="search_container">
                    <input onChange={setFilterValue} className={mode ? "night_mode" : "day_mode"} type="search" name="search" id="search" placeholder="Buscar Gif" />
                    <button className="btn">
                        <img onClick={setClick} className="search_img" src="/assets/icons/icon-search-mod-noc.svg" alt="icon-search" />
                    </button>
                </div>
            </form>
            {(filter.length > 0 && button === false) ? <AutoComplete /> : null}
        </>
    );
}

const Filter = () => {
    const { mode }    = useContext(ModeContext);
    const { results } = useContext(ResultsContext);
    const { button }  = useContext(ButtonContext);

    return (
        <div className={mode ? "filter_container night_mode" : "filter_container day_mode"}>
            <div className={mode ? "filter_work night_mode" : "filter_work day_mode"}>
                <h1 className={mode ? "night_mode" : "day_mode"} data-text="GIFS!">¡Inspírate y busca los mejores </h1>
                <img className="filter_img" src="./assets/images/ilustra_header.svg" alt="ilustra_header" />
                <Search />
                <h2 className={mode ? "night_mode" : "day_mode"}>{(results.length && button === true) ? make.after : make.before}</h2>
            </div>
        </div>
    );
};

export default Filter;