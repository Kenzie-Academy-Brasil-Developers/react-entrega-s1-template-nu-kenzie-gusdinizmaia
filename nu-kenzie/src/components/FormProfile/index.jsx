import { Input } from "../Input";
import { Button } from "../Button";

import "./style.css";

export function FormProfile() {
  return (
    <form className="create__transaction" action="">
      <label htmlFor="">Descrição</label>
      <Input type="text" text="Digite aqui sua descrição" />
      <span>Ex:Compra de roupas</span>
      <label htmlFor="">Valor</label>
      <Input type="number" text="1" />
      <label htmlFor="">Tipo de valor</label>
      <select name="" id="">
        <option value="">Entrada</option>
        <option value="">Saída</option>
      </select>
      <Button text="Inserir um valor" />
    </form>
  );
}
