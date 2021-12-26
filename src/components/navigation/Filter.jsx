import React, { useContext } from "react";
import { make } from "../../helpers/variables";
import { ModeContext } from '../../context/modeContext';
import { FilterContext } from '../../context/filterContext';
import { ResultsContext } from "../../context/resultsContext";
import { urlSearch, apiKey, qty } from "../../helpers/variables";
import { AutoCompleteContext } from "../../context/autocompleteContext";
import AutoComplete from "../navigation/AutoComplete";
import "../../styles/filter.css";

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

const Search = () => {
    const { mode } = useContext(ModeContext);
    const { filter, setFilterUpdate } = useContext(FilterContext);
    const { setLoading, setResults } = useContext(ResultsContext);
    const { setAutoComplete } = useContext(AutoCompleteContext);

    //carga los gifs de la búsqueda
    const handleSearch = (e) => {
        e.preventDefault();
        if (filter) {
            try {
            (async () => {
                const res = await fetch(`${urlSearch}?api_key=${apiKey}&q=(encodeURI(${filter}))&limit=${qty}&offset=0&rating=g&lang=en`);
                const data = await res.json();
                setResults(data.data);
                setAutoComplete([]);
                // setFilterUpdate('');
                setLoading(true);
            })();
            } catch (e) {
            }
        }
    }

    const handleFilterValue = (e) => {
        setFilterUpdate(e.target.value);
    }

    return (
        <nav className="submit_container">
            <form onSubmit={handleSearch} className="submit_container" autoComplete="off">
                <div className="search_container">
                    <input value={filter} onChange={handleFilterValue} className={mode ? "night_mode" : "day_mode"} type="search" placeholder="Buscar Gif" />
                    <button className="btn">
                        <img className="search_img" src="/assets/icons/icon-search-mod-noc.svg" alt="icon-search" />
                    </button>
                </div>
            </form>
            {(filter.length > 0) ? <AutoComplete /> : null}
        </nav>
    );
}

export default Filter;