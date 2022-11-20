import React from "react";
import "./style.css";

import { RenderFilter } from "../../render/RenderFilter";
import { RenderCards } from "../../render/RenderCards";

export function Button({ callback, id, text, type }) {
  console.log(callback);
  return (
    <React.Fragment>
      <button
        onClick={(e) => callback("profile")}
        className="button__primary"
        type={type}
        id={id}
      >
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
