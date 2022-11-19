import "./style.css";

import { Icon } from "../Icon";

export function Card({ title, value, type }) {
  return (
    <li className="card">
      <h3>{title}</h3>
      <p>{value}</p>
      <h5>{type}</h5>
      <Icon text="close" />
    </li>
  );
}
