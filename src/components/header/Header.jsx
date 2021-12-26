import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { way, urlTrending, apiKey, qty  } from "../../helpers/variables";
import { ModeContext } from '../../context/modeContext';
import { ResultsContext } from "../../context/resultsContext";
import { AutoCompleteContext } from "../../context/autocompleteContext";
import { FilterContext } from "../../context/filterContext";
import "../../styles/header.css";
  
  const Header = () => {
    const { mode, setModeUpdate } = useContext(ModeContext);
    const { setAutoComplete } = useContext(AutoCompleteContext);
    const { setLoading, setResults } = useContext(ResultsContext);
    const { setFilterUpdate } = useContext(FilterContext);

    const setClick = (e) => {
      e.preventDefault();
      setModeUpdate(!mode);
    }

    const handleMain = (e) => {
      e.preventDefault();
      try {
        (async () => {
          const res = await fetch(`${urlTrending}?api_key=${apiKey}&limit=${qty}&rating=g&lang=en`);
          const data = await res.json();
          setResults(data.data);
          setAutoComplete([]);
          setFilterUpdate('');
          setLoading(true);
        })();
      } catch (e) {
    }
  } 

    return (
    <header className={mode ? "header_container night_mode" : "header_container day_mode"}>
      <div className="head_header" />
        <div className={mode ? "head_work night_mode" : "head_work day_mode"}>
        <Link  to='/' exact>
          <img onClick={handleMain} className={mode ? "head_logo night_mode" : "head_logo day_mode"} src={mode ? "assets/icons/logo-mobile-modo-noct.svg" : "assets/icons/logo-desktop.svg"} alt="gifos-logo" />
        </Link>
        <button className="butn" onClick={setClick}>{mode ? way.DAY : way.NIGHT}</button>
      </div>
    </header>
  );
}

export default Header;
