import React from "react";
import { FormProfile } from "../../components/FormProfile";
import { Header } from "../../components/Header";
import { NavTransaction } from "../../components/NavTransaction";
import { Card } from "../../components/Card";

import "./style.css";

export function ProfilePage() {
  return (
    <React.Fragment>
      <Header />
      <main className="profile__page">
        <section className="container__create">
          <FormProfile />
        </section>
        <section className="container__resumo">
          <NavTransaction />
          <ul>
            <Card title="sdsds" value="dsdsd" type="entrada" />
          </ul>
        </section>
      </main>
    </React.Fragment>
  );
}
