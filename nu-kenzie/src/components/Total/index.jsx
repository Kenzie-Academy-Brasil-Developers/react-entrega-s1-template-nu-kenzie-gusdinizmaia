import "./style.css";

export function Total({ array }) {
  function price() {
    const values = array.map((elem) => parseInt(elem.value));
    const newArray = values.reduce((acc, value) => acc + value, 0);

    return newArray.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div className="total">
      <h2>Valor total</h2>
      <p>{price()}</p>
      <span>O valor se refere ao saldo</span>
    </div>
  );
}
