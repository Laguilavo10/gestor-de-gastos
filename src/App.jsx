import { useEffect, useState } from "react"
import { CrearPerfil } from "./components/CrearPerfil"
import { Estadisticas } from "./components/Estadisticas"
import { EstadisticasMes } from "./components/EstadisticasMes"
import { HashRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { ItemMovimiento } from "./components/ItemMovimiento"
import { ModalNuevoMovimiento } from "./components/ModalNuevoMovimiento"
import { Movimientos } from "./components/Movimientos"
import { NavMobile } from "./components/NavMobile"
import { NoHayRegistro } from "./components/NoHayRegistro"
import { Profile } from "./components/Profile"
import fechaHoy from "./functions/fechaHoy"
import numeroAMes from "./functions/numeroAMes"
import "./index.css"

function App() {
  // debugger
  let userLocalStorage = JSON.parse(localStorage.getItem("info"))

  if (userLocalStorage == null) {
    localStorage.setItem("info", JSON.stringify(null))
  }
  const [infoUser, setInfoUser] = useState(JSON.parse(localStorage.getItem("info")))

  let { mes, año } = fechaHoy()

  const indexMes = () => {
    if (infoUser != null) {
      let indexMes = infoUser.finanzas[año].findIndex(
        (a) => a.mes === numeroAMes(mes)
      )
      return indexMes
    }
  }
  console.log(infoUser)
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
            <>
              <Route
                path="/"
                element={
                  <Profile infoUser={infoUser} setInfoUser={setInfoUser} />
                }
              />
              <Route
                path="estadisticas"
                element={
                  <Estadisticas>
                    {infoUser.finanzas[año].reverse().map((a) => (
                      <EstadisticasMes dataMes={a} key={a.mes} />
                    ))}
                  </Estadisticas>
                }
              />
              <Route
                path="movimientos"
                element={
                  <Movimientos>
                    {infoUser.finanzas[año][indexMes()].gastos.map((a, index) => (
                      <ItemMovimiento
                        infoGasto={a}
                        key={index}
                        infoUser={infoUser}
                        setInfoUser={setInfoUser}
                      />
                    ))}
                  </Movimientos>
                }
              />
            </>
          )}
        </Routes>
        <NavMobile infoUser={infoUser}/>
      </HashRouter>
    </>
  )
}

export default App
