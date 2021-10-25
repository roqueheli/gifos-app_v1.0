import React from "react";
import "../styles/loader.css";

function Loader() {
  return (
    <div className="loader">
      <div className="loader-inner ball-grid-beat">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
