import { useState } from "react";
import "../../styles/Estadisticas.css";
import { EstadisticasMes } from "../EstadisticasMes";

export function Estadisticas({ infoUser, añoActual }) {

  const [año, setAño] = useState(añoActual);
  let añosDisponibles = Object.keys(infoUser.finanzas)

  const añoSeleccionado = (event) => {
    setAño(event.target.value);
  };

  return (
    <section className="stats-container">
      <select onChange={añoSeleccionado} className='options-año'>
        {añosDisponibles.map((año) => (
          <option key={año} value={año}>
            {año}
          </option>
        ))}
      </select>
      {infoUser.finanzas[año].reverse().map((a) => (
        <EstadisticasMes dataMes={a} key={a.mes} año={año}/>
      ))}
    </section>
  );
}
