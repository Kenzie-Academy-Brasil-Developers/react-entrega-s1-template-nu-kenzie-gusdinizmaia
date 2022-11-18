import "./style.css";

import { ButtonGrey } from "../Button";

export function NavTransaction() {
  return (
    <div className="nav__transaction">
      <h2>Resumo financeiro</h2>
      <nav>
        <ButtonGrey text="Todos" />
        <ButtonGrey text="Entradas" />
        <ButtonGrey text="Despesas" />
      </nav>
    </div>
  );
}
