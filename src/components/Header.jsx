import React, { useContext } from "react";
import "../styles/header.css";
import { way } from "../helpers/variables";
import { ModeContext } from '../context/modeContext';
  
  const Header = () => {
    const { mode, setModeUpdate } = useContext(ModeContext);

    const setClick = (e) => {
      e.preventDefault();
      setModeUpdate(!mode);
    }

    return (
    <div className={mode ? "header_container night_mode" : "header_container day_mode"}>
      <div className="head_header" />
        <div className={mode ? "head_work night_mode" : "head_work day_mode"}>
        <img
          className={mode ? "head_logo night_mode" : "head_logo day_mode"}
          src={mode ? "assets/icons/logo-mobile-modo-noct.svg" : "assets/icons/logo-desktop.svg"} alt="gifos-logo"/>
          <button className="butn" onClick={setClick}>{mode ? way.DAY : way.NIGHT}</button>
      </div>
    </div>
  );
}

export default Header;
