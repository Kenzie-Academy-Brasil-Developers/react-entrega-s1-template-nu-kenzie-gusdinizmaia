import React, { useState } from "react";

import { FormProfile } from "../../components/FormProfile";
import { Header } from "../../components/Header";
import { NavTransaction } from "../../components/NavTransaction";
import { Total } from "../../components/Total";
import { RenderCards } from "../../render/RenderCards.jsx";

import "./style.css";

export function ProfilePage() {
  const [transaction, setTransaction] = useState([]);

  return (
    <React.Fragment>
      <Header />
      <main className="profile__page">
        <section className="container__create">
          <FormProfile callback={setTransaction} />
          <Total value="15.00" />
        </section>
        <section className="container__resumo">
          <NavTransaction />
          <ul>{<RenderCards array={transaction} />}</ul>
        </section>
      </main>
    </React.Fragment>
  );
}
