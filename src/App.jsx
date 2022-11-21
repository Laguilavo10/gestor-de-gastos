import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import {IngresosEgresosCounter} from './components/IngresosEgresosCounter'
import {SaldoActual} from './components/SaldoActual'
import {Movimientos} from './components/Movimientos'
import {Profile} from './components/Profile'
import {NavMobile} from './components/NavMobile'
function App() {

  const [optionRender, setoptionRender] = useState('profile')

  return (
    <>
      {/* <Profile></Profile>
      <SaldoActual></SaldoActual>
      <IngresosEgresosCounter></IngresosEgresosCounter>
      <Movimientos></Movimientos> */}
      
      <NavMobile setoptionRender={setoptionRender}></NavMobile>
      {optionRender == 'profile' && <Profile></Profile>}
      {optionRender == 'stats' && <SaldoActual></SaldoActual>}
      {optionRender == 'movimientos' && <Movimientos></Movimientos>}

    </>
  );
}

export default App;
