import { useEffect, useState } from "react";
import { CrearPerfil } from "./components/CrearPerfil";
import { Estadisticas } from "./components/Estadisticas";
import { EstadisticasMes } from "./components/EstadisticasMes";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { ItemMovimiento } from "./components/ItemMovimiento";
import { Movimientos } from "./components/Movimientos";
import { NavMobile } from "./components/NavMobile";
import { Profile } from "./components/Profile";
import fechaHoy from "./functions/fechaHoy";
import numeroAMes from "./functions/numeroAMes";
import "./index.css";

function App() {
  // debugger
  let userLocalStorage = JSON.parse(localStorage.getItem("info"));

  if (userLocalStorage == null) {
    localStorage.setItem("info", JSON.stringify(null));
  }
  const [infoUser, setInfoUser] = useState(
    JSON.parse(localStorage.getItem("info"))
  );

  let { mes, año } = fechaHoy();

  const indexMes = () => {
    if (infoUser != null) {
      let indexMes = infoUser.finanzas[año].findIndex(
        (a) => a.mes === numeroAMes(mes)
      );
      return indexMes;
    }
  };

  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          {!infoUser ? (
            <Route
              path=""
              element={<CrearPerfil setInfoUser={setInfoUser} />}
            />
          ) : (
            <Route
              path="/"
              element={
                <Profile infoUser={infoUser} setInfoUser={setInfoUser} />
              }
            />
          )}

          <Route
            path="estadisticas"
            element={<Estadisticas infoUser={infoUser} añoActual={año} />}
          />
          <Route
            path="movimientos"
            element={
              <Movimientos
                infoUser={infoUser}
                setInfoUser={setInfoUser}
                año={año}
                indexMes={indexMes}
              />
            }
          />
        </Routes>
        <NavMobile infoUser={infoUser} />
      </HashRouter>
    </>
  );
}

export default App;
