import React from "react";
import "./style.css";

export function Icon({ text, id, callback }) {
  function removeCard() {
    console.log("123");

    callback((array) => {
      console.log(array);

      let a = array.filter((elem) => elem.id !== id);

      console.log(a, id);

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
