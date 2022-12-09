import { useEffect, useState } from "react";
import "./index.css";
import { Header } from "./components/Header";
import { CrearPerfil } from "./components/CrearPerfil";
import { NoHayRegistro } from "./components/NoHayRegistro";
import { Estadisticas } from "./components/Estadisticas";
import { EstadisticasMes } from "./components/EstadisticasMes";
import { Profile } from "./components/Profile";
import { Movimientos } from "./components/Movimientos";
import { ModalNuevoMovimiento } from "./components/ModalNuevoMovimiento";
import { ItemMovimiento } from "./components/ItemMovimiento";
import { NavMobile } from "./components/NavMobile";
import fechaHoy from "./functions/fechaHoy";
import numeroAMes from "./functions/numeroAMes";

function App() {
  debugger
  const [optionRender, setoptionRender] = useState("profile");
  const [isOpenModal, setIsOpenModal] = useState(false);
  let userLocalStorage = JSON.parse(localStorage.getItem("info"));

  if (userLocalStorage == null) {
    localStorage.setItem("info", JSON.stringify(null));
  }
  const [infoUser, setInfoUser] = useState(
    JSON.parse(localStorage.getItem("info"))
  );

  
  // console.log(infoUser.finanzas[año][indexMes].gastos)
  function renderSection(optionRender) {
    let { mes, año } = fechaHoy();
  
    let indexMes = infoUser.finanzas[año].findIndex((a)=>(a.mes === numeroAMes(mes)))
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
        if (infoUser.finanzas[año].length == 0) {
          <NoHayRegistro />;
        } else {
          return (
            <Estadisticas>
              {infoUser.finanzas[año].reverse().map((a) => (
                <EstadisticasMes dataMes={a} key={a.mes} />
              ))}
            </Estadisticas>
          );
        }
      case "movimientos":
        if (infoUser.finanzas[año].length == 0) {
          return <NoHayRegistro/>;
        } else {
          return (
            <Movimientos>
              {infoUser.finanzas[año][indexMes].gastos.map((a, index) => (
                <ItemMovimiento infoGasto={a} key={index} infoUser={infoUser} setInfoUser={setInfoUser}/>
              ))}
            </Movimientos>
          );
        }
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
