import React, { useContext } from "react";
import { urlSearch, apiKey, qty } from "../../helpers/variables";
import { AutoCompleteContext } from "../../context/autocompleteContext";
import AutoComplete from "../navigation/AutoComplete";
import { FilterContext } from '../../context/filterContext';
import { ModeContext } from "../../context/modeContext";
import { ResultsContext } from "../../context/resultsContext";

function Search() {
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
                    setLoading(false);
                    setResults([]);
                    const res = await fetch(`${urlSearch}?api_key=${apiKey}&q=(encodeURI(${filter}))&limit=${qty}&offset=0&rating=g&lang=en`);
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

export default Search;
