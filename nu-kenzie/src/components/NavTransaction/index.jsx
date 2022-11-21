import "./style.css";

import { ButtonGrey } from "../Button";

export function NavTransaction({ render, callbackFilter, array }) {
  const types = ["todos", "entrada", "saida"];
  return (
    <div className="nav__transaction">
      <h2>Resumo financeiro</h2>
      <nav>
        {types.map((elem, index) => (
          <ButtonGrey
            key={index}
            filter={elem}
            text={elem}
            callbackFilter={callbackFilter}
            render={render}
            array={array}
          />
        ))}
      </nav>
    </div>
  );
}
