import { useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

// rutas accesibles
import { CrearPerfil } from "./pages/CrearPerfil";
import { Profile } from "./pages/Profile";
import { Estadisticas } from "./pages/Estadisticas";
import { Movimientos } from "./pages/Movimientos";

// componentes
import { Header } from "./components/Header";
import { NavMobile } from "./components/NavMobile";

//funciones
import fechaHoy from "./functions/fechaHoy";
import numeroAMes from "./functions/numeroAMes";

//estilos
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
