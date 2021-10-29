import React, { useContext } from "react";
import { ModeContext } from "../../context/modeContext";
import "../../styles/results.css";

const NoResults = () => {
  const { mode } = useContext(ModeContext);

  return (
    <div className={ mode ? "results_container night_mode" : "results_container day_mode"}>
      <div className="noresults_subcontainer">
        <h1>¡No encontramos resultados para tu búsqueda!</h1>
        <img src="../../assets/images/no-results.gif" alt="" />
      </div>
    </div>
  );
};

export { NoResults };
