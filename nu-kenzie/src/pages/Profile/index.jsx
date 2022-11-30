import React, { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { NavTransaction } from "../../components/NavTransaction";
import { SectionForm } from "../../components/SectionForm";
import { RenderCards } from "../../render/RenderCards";

import "./style.css";

export function ProfilePage({ callbackPage }) {
  const [renderCards, setRenderCards] = useState("todos");
  const [transaction, setTransaction] = useState([]);
  const [filterTransaction, setFilterTransaction] = useState([]);

  useEffect(() => {
    function AttFilter() {
      if (renderCards !== "todos") {
        return setFilterTransaction(() =>
          transaction.filter((elem) => elem.type === renderCards)
        );
      } else {
        return setFilterTransaction(transaction);
      }
    }

    AttFilter();
  }, [renderCards, transaction]);

  return (
    <React.Fragment>
      <Header callback={callbackPage} />
      <main className="profile__page">
        <SectionForm
          setTransaction={setTransaction}
          filterTransaction={filterTransaction}
        />
        <section className="container__resumo">
          <NavTransaction render={setRenderCards} />
          <RenderCards
            array={filterTransaction}
            callbackFilter={setFilterTransaction}
            callback={setTransaction}
          />
        </section>
      </main>
    </React.Fragment>
  );
}
