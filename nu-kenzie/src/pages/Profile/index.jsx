import React, { useState } from "react";

import { FormProfile } from "../../components/FormProfile";
import { Header } from "../../components/Header";
import { NavTransaction } from "../../components/NavTransaction";
import { Total } from "../../components/Total";

import { RenderCards } from "../../render/RenderCards.jsx";
import { RenderFilter } from "../../render/RenderFilter.jsx";

import "./style.css";

export function ProfilePage() {
  const [renderCards, setRenderCards] = useState("all");
  const [transaction, setTransaction] = useState([]);
  const [filterTransaction, setFilterTransaction] = useState([]);

  return (
    <React.Fragment>
      <Header />
      <main className="profile__page">
        <section className="container__create">
          <FormProfile callback={setTransaction} />
          <Total array={transaction} />
        </section>
        <section className="container__resumo">
          <NavTransaction
            render={setRenderCards}
            callbackFilter={setFilterTransaction}
            array={transaction}
          />
          <ul>
            {renderCards === "all" ? (
              <RenderCards callback={setTransaction} array={transaction} />
            ) : (
              <RenderFilter
                array={filterTransaction}
                callback={setFilterTransaction}
              />
            )}
          </ul>
        </section>
      </main>
    </React.Fragment>
  );
}
