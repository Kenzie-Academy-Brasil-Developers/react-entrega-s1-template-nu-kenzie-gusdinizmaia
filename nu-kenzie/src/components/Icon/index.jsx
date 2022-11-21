import React from "react";
import "./style.css";

export function Icon({ text, id, callback }) {
  function removeCard() {
    callback((array) => {
      let a = array.filter((elem) => elem.id !== id);

      return a;
    });
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
