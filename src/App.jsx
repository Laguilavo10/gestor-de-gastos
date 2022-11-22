import { useEffect, useState } from "react";
import "./index.css";
import {Header} from './components/Header'
import {Estadisticas} from './components/Estadisticas'
import {Movimientos} from './components/Movimientos'
import {Profile} from './components/Profile'
import {NavMobile} from './components/NavMobile'
import {ItemMovimiento} from './components/ItemMovimiento'
import { user } from "./infoFinanzas";
function App() {

  const [optionRender, setoptionRender] = useState('profile')

  return (
    <> 
      <Header></Header>
      <NavMobile setoptionRender={setoptionRender}></NavMobile>
      {optionRender == 'profile' && <Profile></Profile>}
      {optionRender == 'stats' && <Estadisticas></Estadisticas>}
      {optionRender == 'movimientos' && <Movimientos>
          {user[0].finanzas[0].gastos.map((a, index)=>(<ItemMovimiento
            infoMovimiento={a}
            key={index}
          />))}
        </Movimientos>}

    </>
  );
}

export default App;
