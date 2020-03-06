import React from "react";
import "./style.css";

import Header from "../../components/Header";

export default function Register() {
  return (
    <>
      <Header />
      <main className="register-form">
        <h1>Registrar Time</h1>
        <form>
          <div className="input-block">
            <label htmlFor="">Nome do Time</label>
            <input type="text" placeholder="Ex. Flamengo" />
          </div>
          <div className="input-block">
            <label htmlFor="">Pontos</label>
            <input type="number" placeholder="Ex. 92" />
          </div>
          <div className="input-block">
            <label htmlFor="">Jogos</label>
            <input type="number" placeholder="Ex. 30" />
          </div>
          <div className="input-block-small">
            <label htmlFor="">Vitórias</label>
            <input type="number" placeholder="Ex. 4" />
          </div>
          <div className="input-block-small">
            <label htmlFor="">Empates</label>
            <input type="number" placeholder="Ex. 3" />
          </div>
          <div className="input-block-small">
            <label htmlFor="">Derrotas</label>
            <input type="number" placeholder="Ex. 5" />
          </div>
          <div className="input-block">
            <label htmlFor="">Gols-Pró</label>
            <input type="number" placeholder="Ex. 80" />
          </div>
          <div className="input-block">
            <label htmlFor="">Gols-Contra</label>
            <input type="number" placeholder="Ex. 27" />
          </div>
          <div className="input-block">
            <label htmlFor="">Saldo de Gols</label>
            <input type="number" placeholder="Ex. 48" />
          </div>
          <div className="input-block">
            <label htmlFor="">Aproveitamento</label>
            <input type="number" placeholder="Ex. 70" />
          </div>
        </form>
      </main>
    </>
  );
}
