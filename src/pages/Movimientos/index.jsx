import { useEffect, useState, useReducer } from "react"
import { Navigate } from "react-router-dom"
import "../../styles/Movimientos.css"
import { ItemMovimiento } from "../../components/ItemMovimiento"
import { useMovimientos } from "../../hooks/useMovimientos";

export function Movimientos({ infoUser, año, setInfoUser }) {
  // debugger
  if (!infoUser) {
    return <Navigate to='/'></Navigate>
  }

  useEffect(() => {
    let section = document.getElementById("section")
    section.scrollTop = section.scrollHeight
  }, []) 

    // useEffect(() => {
    //   let finanzasAñoActual = infoUser.finanzas[año].flatMap((a)=>(a.gastos));
    //   let movimientosOrdenados = finanzasAñoActual.sort((a, b) => a.fecha.split("-")[2] - b.fecha.split("-")[2])
    //   setMovimientosRender(movimientosOrdenados);
    // }, [infoUser.finanzas])

    let movimientosRender = useMovimientos(infoUser, año)
    // const [movimientosRender, setMovimientosRender] = useState('');
    
    const busquedaMovimientos = (event) => {
      let busqueda = event.target.value
      let filtro = infoUser.finanzas[año]
        .flatMap((gastosArray) => gastosArray.gastos)
        .filter(
          (movimiento) => movimiento.descripcion.includes(busqueda) && movimiento
        )
      busqueda ? setMovimientosRender(filtro) : setMovimientosRender(movimientosOrdenados)
    }

  return (
    <>
      <div className="search-container">
        <div className="input-search">
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png"
            alt=""
          />
          <input
            type="text"
            placeholder="Buscar"
            onChange={busquedaMovimientos}
          />
        </div>
        <button type="button" className="icons">
          <img src="https://img.icons8.com/ios-glyphs/30/null/sorting-options.png" />
        </button>
      </div>
      <section className="panel-movimientos" id="section">
        {movimientosRender.length === 0 ? (
          <p>No hay movimientos</p>
        ) : (
          movimientosRender.map((a, index) => (
            <ItemMovimiento
              infoGasto={a}
              key={index}
              infoUser={infoUser}
              setInfoUser={setInfoUser}
            />
          ))
        )}
      </section>
    </>
  )
}




