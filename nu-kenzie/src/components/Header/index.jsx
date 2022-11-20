import React from "react";
import "./style.css";

import { Logo } from "../Logo";

export function Header({ callback }) {
  return (
    <header className="container__nav">
      <Logo />
      <button onClick={(e) => callback("home")} className="button__grey">
        Inicio
      </button>
    </header>
  );
}
