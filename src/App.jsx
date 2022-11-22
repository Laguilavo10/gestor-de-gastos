import { useEffect, useState } from "react";
import "./index.css";
import { Header } from "./components/Header";
import { Estadisticas } from "./components/Estadisticas";
import { Movimientos } from "./components/Movimientos";
import { Profile } from "./components/Profile";
import { NavMobile } from "./components/NavMobile";
import { ItemMovimiento } from "./components/ItemMovimiento";
import { ModalNuevoMovimiento } from "./components/ModalNuevoMovimiento";
import { CrearPerfil } from "./components/CrearPerfil";
import { user } from "./infoFinanzas";

function App() {
  const [optionRender, setoptionRender] = useState("profile");
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Header/>
      <ModalNuevoMovimiento
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <CrearPerfil/>
      {/* {optionRender == 'profile' && <Profile isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>}
      {optionRender == 'stats' && <Estadisticas></Estadisticas>}
      {optionRender == 'movimientos' && <Movimientos>
          {user[0].finanzas[0].gastos.map((a, index)=>(<ItemMovimiento
            infoMovimiento={a}
            key={index}
            />))}
        </Movimientos>} */}
      <NavMobile setoptionRender={setoptionRender}></NavMobile>
    </>
  );
}

export default App;
