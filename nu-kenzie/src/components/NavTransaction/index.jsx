import "./style.css";

import { ButtonGrey } from "../Button";

export function NavTransaction({ render }) {
  const types = ["todos", "entrada", "saida"];
  return (
    <div className="nav__transaction">
      <h2>Resumo financeiro</h2>
      <nav>
        {types.map((elem, index) => (
          <ButtonGrey key={index} filter={elem} text={elem} render={render} />
        ))}
      </nav>
    </div>
  );
}
