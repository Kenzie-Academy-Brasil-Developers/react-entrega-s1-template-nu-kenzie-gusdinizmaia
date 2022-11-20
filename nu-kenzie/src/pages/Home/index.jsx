import "../Home/style.css";

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";

export function HomePage({ callbackPage }) {
  return (
    <main className="home__page black">
      <section className="container__logo">
        <Logo />
        <p>Centralize o controle das suas finanças</p>
        <span>de forma rápida e segura</span>
        <Button callback={callbackPage} id="button--start" text="iniciar" />
      </section>
      <section className="container__img">
        <figure>
          <img src="../../assents/img/home-img.png" alt="home-img" />
        </figure>
      </section>
    </main>
  );
}
