import React from "react";
import "./style.css";

export function Input({ type, text, id, onChange }) {
  return (
    <React.Fragment>
      <input
        className="input__grey"
        id={id}
        onChange={onChange}
        type={type}
        placeholder={text}
      ></input>
    </React.Fragment>
  );
}
