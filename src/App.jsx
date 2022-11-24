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
import { EstadisticasMes } from "./components/EstadisticasMes";

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
  // console.log(infoUser);

  function renderSection(optionRender) {
    switch (optionRender) {
      case "profile":
        return (
          <Profile
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            infoUser={infoUser}
          />
        );
      case "stats":
        return (
          <Estadisticas>
            {infoUser.finanzas[2022].map((a) => (
              <EstadisticasMes dataMes={a} key={a.mes}/>
            ))}
          </Estadisticas>
        );
      case "movimientos":
        return (
          <Movimientos>
            {infoUser.finanzas[2022][0].gastos.map((a, index) => (
              <ItemMovimiento infoGasto={a} key={index} />
            ))}
          </Movimientos>
        );
    }
  }

  return (
    <>
      <Header />
      <ModalNuevoMovimiento
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        infoUser={infoUser}
        setInfoUser={setInfoUser}
      />
      {!infoUser ? (
        <CrearPerfil setInfoUser={setInfoUser} />
      ) : (
        renderSection(optionRender)
      )}
      <NavMobile setoptionRender={setoptionRender}></NavMobile>
    </>
  );
}

export default App;
