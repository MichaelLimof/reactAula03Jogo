import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [estado, setEstado] = useState("ENTRADA");

  //palpites
  const [palpite, setPalpite] = useState(150);
  const [numeroPalpites, setNumeroPalpites] = useState(1);

  const [min, setmin] = useState(0);
  const [max, setmax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setmin(0);
    setmax(300);
    setNumeroPalpites(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar</button>;
  }

  const menor = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setmax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setmin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Resultado = {palpite} com {numeroPalpites} chutes
        </p>
        <button onClick={iniciarJogo}>Jogar Novamente</button>
      </div>
    );
  }
  //Entrada, rodando e Fim
  //chute de 0 <> 300
  //palpites que a maquina deu

  return (
    <div className="App">
      <h1>Jogo da Adivinhação</h1>
      <p>O seu numero é {palpite}</p>
      <p>
        min: {min} / max: {max}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
