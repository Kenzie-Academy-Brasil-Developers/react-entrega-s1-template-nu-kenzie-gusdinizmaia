import React from "react";
import "./style.css";

export function Input({ type, text }) {
  return (
    <React.Fragment>
      <input className="input__grey" type={type} placeholder={text}></input>
    </React.Fragment>
  );
}
