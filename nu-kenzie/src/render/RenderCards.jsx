import { Card } from "../components/Card";

export function RenderCards({ callback, array }) {
  console.log(callback, array);

  return array.map((elem, index) => (
    <Card
      key={index}
      description={elem.description}
      value={elem.value}
      type={elem.type}
      id={elem.id}
      callback={callback}
    />
  ));
}
