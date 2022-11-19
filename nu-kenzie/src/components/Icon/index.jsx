import React from "react";
import "./style.css";

export function Icon({ text }) {
  return (
    <React.Fragment>
      <span id="card__button--close" className="material-symbols-outlined">
        {text}
      </span>
    </React.Fragment>
  );
}
