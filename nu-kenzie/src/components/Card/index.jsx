import "./style.css";

import { Icon } from "../Icon";
import React from "react";

export function Card({ description, value, type, id, callback }) {
  return (
    <li className="card">
      <h3>{description}</h3>
      <p>{value}</p>
      <h5>{type}</h5>
      <Icon text="delete" callback={callback} id={id} />
    </li>
  );
}
