import React from "react";
import "./style.css";

import Table from "../../components/Table";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Table type="points" />
        <Table type="scores" />
      </main>
      <footer>
        <div className="section-group">
          <div className="section">
            <h3>Fonte</h3>
            <a
              href="https://www.gazetaesportiva.com/campeonatos/brasileiro-serie-a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gazeta Esportiva
            </a>
          </div>
          <div className="section">
            <h3>Desenvolvedor</h3>
            <a
              href="https://github.com/marcelloc97"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marcello Carvalhal
            </a>
          </div>
          <div className="section">
            <h3>Este repositório</h3>
            <a
              href="https://github.com/marcelloc97/brasileirao-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brasileirão Web
            </a>
          </div>
        </div>
        <span>Copyright (c) 2020 Marcello Carvalhal</span>
      </footer>
    </>
  );
}
