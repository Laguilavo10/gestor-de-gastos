import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import {IngresosEgresosCounter} from './components/IngresosEgresosCounter'
import {SaldoActual} from './components/SaldoActual'
function App() {

  return (
    <>
      <h1>Gestor de gastos</h1>
      <IngresosEgresosCounter></IngresosEgresosCounter>
      <SaldoActual></SaldoActual>
    </>
  );
}

export default App;
