import { useEffect, useState } from "react";
import "./index.css";
import {Header} from './components/Header'
import {Estadisticas} from './components/Estadisticas'
import {Movimientos} from './components/Movimientos'
import {Profile} from './components/Profile'
import {NavMobile} from './components/NavMobile'
import {ItemMovimiento} from './components/ItemMovimiento'
import {ModalMovimiento} from './components/ModalMovimiento'
import { user } from "./infoFinanzas";

function App() {

  const [optionRender, setoptionRender] = useState('profile') 
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <> 
      <Header></Header>
      <NavMobile setoptionRender={setoptionRender}></NavMobile>
      <ModalMovimiento isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}></ModalMovimiento>
      {optionRender == 'profile' && <Profile isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>}
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
