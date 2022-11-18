import React from "react";
import "./style.css";

export function Button({ id, text }) {
  return (
    <React.Fragment>
      <button className="button__primary" id={id}>
        {text}
      </button>
    </React.Fragment>
  );
}

export function ButtonGrey({ id, text }) {
  return (
    <React.Fragment>
      <button className="button__grey" id={id}>
        {text}
      </button>
    </React.Fragment>
  );
}
