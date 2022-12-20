import { useEffect, useState } from "react";
import "../../styles/Movimientos.css";
import { ItemMovimiento } from "../ItemMovimiento";

export function Movimientos({ infoUser, año, indexMes, setInfoUser }) {
  useEffect(() => {
    let section = document.getElementById("section");
    section.scrollTop = section.scrollHeight;
  }, []);
  // console.log(infoUser.finanzas[año][indexMes()].gastos)

  let movimientosOrdenados = infoUser.finanzas[año][indexMes()].gastos.sort(
    (a, b) => a.fecha.split("-")[2] - b.fecha.split("-")[2]
  );

  const [movimientosRender, setMovimientosRender] =
    useState(movimientosOrdenados);

  const busquedaMovimientos = (event) => {
    let busqueda = event.target.value;
    // let mes = infoUser.finanzas[año].map((a) => a);
    // let gastos = mes.flatMap((a) => a.gastos);
    // let filtro = gastos.filter((a) => a.descripcion.includes(busqueda) && a);
    let filtro = infoUser.finanzas[año]
      .map((mes) => mes)
      .flatMap((gastosArray) => gastosArray.gastos)
      .filter((movimiento) => movimiento.descripcion.includes(busqueda) && movimiento);
    setMovimientosRender(filtro);
  };
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
        {/* {movimientosOrdenados.length === 0 ? <p>No hay movimientos</p> : movimientosOrdenados} */}
        {movimientosRender.map((a, index) => (
          <ItemMovimiento
            infoGasto={a}
            key={index}
            infoUser={infoUser}
            setInfoUser={setInfoUser}
          />
        ))}
      </section>
    </>
  );
}

// {"nombre":"felipe","imgPerfil":"https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg","saldo":10000,"ultimoSaldo":10000,"finanzas":{"2022":[{"mes":"Diciembre","saldoFinal":0,"gastos":[{"fecha":"2022-12-08","valor":3123,"transaccion":"ingreso","descripcion":"dsad","metodo":"Tarjeta"},{"fecha":"2022-12-20","valor":2222,"transaccion":"ingreso","descripcion":"prueba","metodo":"Daviplata"},{"fecha":"2022-12-20","valor":13213,"transaccion":"ingreso","descripcion":"uwu","metodo":"Tarjeta"}]},{"mes":"Noviembre","saldoFinal":0,"gastos":[{"fecha":"2022-11-09","valor":23123,"transaccion":"gasto","descripcion":"dsa","metodo":"Nequi"}]}],"2023":[{"mes":"Enero","saldoFinal":0,"gastos":[{"fecha":"2023-01-10","valor":2312,"transaccion":"ingreso","descripcion":"dsad","metodo":"Tarjeta"}]}]}}
