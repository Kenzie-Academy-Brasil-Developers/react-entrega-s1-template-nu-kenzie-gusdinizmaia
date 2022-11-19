import "./style.css";

export function Total({ value }) {
  return (
    <div className="total">
      <h2>Valor total</h2>
      <p>{value}</p>
      <span>O valor se refere ao saldo</span>
    </div>
  );
}
