import { useState } from "react"
import { Navigate } from "react-router-dom"
import "../../styles/Estadisticas.css"
import { EstadisticasMes } from "../../components/EstadisticasMes"

export function Estadisticas({ infoUser, añoActual }) {
  if (!infoUser) {
    return <Navigate to="/"></Navigate>
  }

  const [año, setAño] = useState(añoActual)
  let añosDisponibles = Object.keys(infoUser.finanzas)

  const añoSeleccionado = (event) => {
    setAño(event.target.value)
  }
  console.log(infoUser.finanzas[2023])

  return (
    <>
      {/* <prev>{JSON.stringify(infoUser.finanzas[2023])}</prev> */}
      <div>
        {infoUser.finanzas[2023].map((a) => (
          <li key={a.Mes}>
            <div >{JSON.stringify(a)}</div>
            <span>------</span>
          </li>

            
        ))}
      </div>
      <section className="stats-container">
        <select onChange={añoSeleccionado} className="options-año" value={año}>
          {añosDisponibles.map((año) => (
            <option key={año} value={año}>
              {año}
            </option>
          ))}
        </select>
        {infoUser.finanzas[año].reverse().map((a) => (
          <EstadisticasMes dataMes={a} key={a.mes} año={año} />
        ))}
      </section>
    </>
  )
}
