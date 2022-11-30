import React from "react";
import "./style.css";

export function Button({ callback, id, text, type }) {
  return (
    <React.Fragment>
      <button
        onClick={(e) => (callback ? callback("profile") : "")}
        className="button__primary"
        type={type}
        id={id}
      >
        {text}
      </button>
    </React.Fragment>
  );
}

export function ButtonGrey({ filter, text, render }) {
  return (
    <React.Fragment>
      <button onClick={() => render(filter)} className="button__grey">
        {text}
      </button>
    </React.Fragment>
  );
}
