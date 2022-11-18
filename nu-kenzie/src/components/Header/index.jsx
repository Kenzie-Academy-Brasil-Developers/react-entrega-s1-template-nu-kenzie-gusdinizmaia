import React from "react";
import "./style.css";

import { Logo } from "../Logo";

export function Header() {
  return (
    <header className="container__nav">
      <Logo />
      <button className="button__grey">Inicio</button>
    </header>
  );
}
