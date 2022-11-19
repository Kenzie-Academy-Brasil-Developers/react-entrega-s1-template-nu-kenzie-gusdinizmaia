import "./style.css";

import { Icon } from "../Icon";

export function Card({ description, value, type }) {
  function teste(e) {
    console.log("156121");
  }

  return (
    <li className="card">
      <h3>{description}</h3>
      <p>{value}</p>
      <h5>{type}</h5>
      <Icon onClick={(e) => teste} text="delete" />
    </li>
  );
}
