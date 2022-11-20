import React from "react";
import "./style.css";

import { RenderFilter } from "../../render/RenderFilter";
import { RenderCards } from "../../render/RenderCards";

export function Button({ id, text, type }) {
  return (
    <React.Fragment>
      <button className="button__primary" type={type} id={id}>
        {text}
      </button>
    </React.Fragment>
  );
}

export function ButtonGrey({ filter, text, callbackFilter, render, array }) {
  function filterCards() {
    render("filter");
    if (filter === "todos") {
      return callbackFilter(array);
    }
    let newArray = array.filter((elem) => elem.type === filter);
    return callbackFilter(newArray);
  }
  return (
    <React.Fragment>
      <button onClick={() => filterCards()} className="button__grey">
        {text}
      </button>
    </React.Fragment>
  );
}
