import { Card } from "../components/Card";

export function RenderCards({ callbackFilter, callback, array }) {
  return (
    <ul>
      {array.map((elem, index) => (
        <Card
          key={index}
          description={elem.description}
          value={elem.value}
          type={elem.type}
          id={elem.id}
          callback={callback}
          callbackFilter={callbackFilter}
        />
      ))}
    </ul>
  );
}
