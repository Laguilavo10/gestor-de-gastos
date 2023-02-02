import { HashRouter, Route, Routes } from "react-router-dom"
// rutas accesibles
import { Login } from "./pages/Login"
import { Profile } from "./pages/Profile"
import { Estadisticas } from "./pages/Estadisticas"
import { Movimientos } from "./pages/Movimientos"
// componentes
import { Header } from "./components/Header"
import { Nav } from "./components/Nav"
//funciones
import fechaHoy from "./functions/fechaHoy"
import numeroAMes from "./functions/numeroAMes"
//estilos
import "./index.css"
//hooks
import { useLocalStorage } from "./hooks/useLocalStorage"

function App() {
  const { data: infoUser, setData: setInfoUser } = useLocalStorage("info")

  let { mes, año } = fechaHoy()

  const indexMes = () => {
    if (infoUser != null) {
      let indexMes = infoUser.finanzas[año].findIndex(
        (a) => a.mes === numeroAMes(mes)
      )
      return indexMes
    }
  }

  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          {!infoUser ? (
            <Route path="" element={<Login setInfoUser={setInfoUser} />} />
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
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Nav infoUser={infoUser} />
      </HashRouter>
    </>
  )
}

export default App
