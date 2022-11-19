import { Input } from "../Input";
import { Button } from "../Button";
import { useState } from "react";

import "./style.css";

export function FormProfile() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  function createTransaction(e) {
    e.preventDefault();

    let data = {
      description: description,
      value: value,
      type: type,
    };

    console.log(data);
  }

  return (
    <form className="create__transaction" onSubmit={createTransaction}>
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
          text="1"
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
