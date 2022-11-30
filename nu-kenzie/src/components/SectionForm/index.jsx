import { FormProfile } from "../FormProfile";
import { Total } from "../Total";

export function SectionForm({ setTransaction, filterTransaction }) {
  return (
    <section className="container__create">
      <FormProfile callback={setTransaction} />
      <Total array={filterTransaction} />
    </section>
  );
}
