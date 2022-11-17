import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import {IngresosEgresosCounter} from './components/IngresosEgresosCounter'
import {SaldoActual} from './components/SaldoActual'
import {Movimientos} from './components/Movimientos'
import {Profile} from './components/Profile'
function App() {

  return (
    <>
      <Profile></Profile>
      <SaldoActual></SaldoActual>
      <IngresosEgresosCounter></IngresosEgresosCounter>
      <Movimientos></Movimientos>
    </>
  );
}

export default App;
