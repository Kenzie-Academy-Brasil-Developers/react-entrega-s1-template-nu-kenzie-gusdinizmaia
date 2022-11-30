import "./style.css";

import { Icon } from "../Icon";
import React from "react";

export function Card({
  callbackFilter,
  description,
  value,
  type,
  id,
  callback,
}) {
  function borderCard() {
    return type === "entrada"
      ? "4px solid var(--color-secondary-1)"
      : "4px solid var(--color-grey-3)";
  }

  return (
    <li style={{ borderLeft: borderCard() }} className={"card"}>
      <h3>{description}</h3>
      <p>
        {parseInt(value).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <h5>{type}</h5>
      <Icon
        text="delete"
        callbackFilter={callbackFilter}
        callback={callback}
        id={id}
      />
    </li>
  );
}
