import "./style.css";

import { Icon } from "../Icon";

export function Card({ title, value, type }) {
  return (
    <li className="card">
      <h3>{title}</h3>
      <h4>{value}</h4>
      <span>{type}</span>
      <Icon text="close" />
    </li>
  );
}
