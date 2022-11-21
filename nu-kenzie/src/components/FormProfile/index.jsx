import { Input } from "../Input";
import { Button } from "../Button";
import { useState } from "react";

import "./style.css";

export function FormProfile({ callback }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const [id, setId] = useState(0);

  function createCard(e) {
    e.preventDefault();

    setId(id + 1);

    let data = {
      description: description,
      value: value,
      type: type,
      id: id,
    };

    const verification = Object.values(data).includes("");

    if (!verification) {
      callback((transaction) => [...transaction, data]);
    }
  }

  return (
    <form className="create__transaction" onSubmit={createCard}>
      <label htmlFor="">Descrição</label>
      <Input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        text="Digite aqui sua descrição"
      />
      <span>Ex:Compra de roupas</span>
      <div>
        <label htmlFor="">Valor</label>
        <Input
          onChange={(e) => setValue(e.target.value)}
          type="number"
          step="0.01"
          text="R$"
          id="input__value"
        />
      </div>
      <div>
        <label htmlFor="">Tipo de valor</label>
        <select onChange={(e) => setType(e.target.value)} name="" id="">
          <option value="" disabled selected>
            --
          </option>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
      </div>
      <Button type="submit" text="Inserir um valor" />
    </form>
  );
}
