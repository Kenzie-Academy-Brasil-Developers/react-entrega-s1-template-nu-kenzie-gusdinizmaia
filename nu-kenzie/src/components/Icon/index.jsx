import React from "react";
import "./style.css";

export function Icon({ text, id, callback, callbackFilter }) {
  function removeCard() {
    callback((array) => array.filter((elem) => elem.id !== id));
    callbackFilter((arrayF) => arrayF.filter((elem) => elem.id !== id));
  }

  return (
    <React.Fragment>
      <span
        id="card__button--close"
        onClick={removeCard}
        className="material-symbols-outlined"
      >
        {text}
      </span>
    </React.Fragment>
  );
}
