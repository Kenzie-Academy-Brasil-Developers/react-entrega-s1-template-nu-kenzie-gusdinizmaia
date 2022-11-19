import { Card } from "../components/Card";

export function RenderCards({ array }) {
  console.log(array);
  return array.map((elem, index) => (
    <Card
      key={index}
      description={elem.description}
      value={elem.value}
      type={elem.type}
    />
  ));
}
