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
  let userLocalStorage = JSON.parse(localStorage.getItem("info"));

  if (userLocalStorage == null) {
    localStorage.setItem("info", JSON.stringify(null));
  }
  const [infoUser, setInfoUser] = useState(
    JSON.parse(localStorage.getItem("info"))
  );

  function hl(optionRender) {
    console.log(optionRender);
    switch (optionRender) {
      case "profile":
        return (
          <Profile
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            infoUser={infoUser}
          />
        );
        break;
      case "stats":
        return <Estadisticas />;
        break;
      case "movimientos":
        return (
          <Movimientos>
            {user[0].finanzas[0].gastos.map((a, index) => (
              <ItemMovimiento infoMovimiento={a} key={index} />
            ))}
          </Movimientos>
        );
        break;
    }
  }
  return (
    <>
      <Header />
      <ModalNuevoMovimiento
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      {!infoUser ? <CrearPerfil setInfoUser={setInfoUser} /> : hl(optionRender)}
      <NavMobile setoptionRender={setoptionRender}></NavMobile>
    </>
  );
}

export default App;
