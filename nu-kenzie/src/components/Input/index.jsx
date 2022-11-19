import React from "react";
import "./style.css";

export function Input({ type, text, id, onChange, step }) {
  return (
    <React.Fragment>
      <input
        className="input__grey"
        id={id}
        onChange={onChange}
        type={type}
        placeholder={text}
        step={step}
      ></input>
    </React.Fragment>
  );
}
