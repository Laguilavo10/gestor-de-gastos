import React from "react";
import arrowDown from '../../assets/arrow-down.png'
import arrowUp from '../../assets/arrow-up.png'

export function ItemMovimiento({infoGasto}) {
  let fecha = infoGasto.fecha.split('-')
  let transaccion = infoGasto.transaccion === 'ingreso' ? ['ingreso-item', 'reverse-item', arrowUp] : ['gasto-item', '', arrowDown]

  function numeroAMes(numero) {
    let meses = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ];
    return meses[numero - 1];
  }

  return (
    <>
      <article className={`${transaccion[1]} item`}>
        <div className="fecha-item">{fecha[2]} <br />{numeroAMes(fecha[1])}/{fecha[0]}</div>
        <div className={`${transaccion[0]} info-item`}>
          <div>
            <div>
              <img
                src={transaccion[2]}
                alt=""
              />
              <span>{infoGasto.metodo}</span>
            </div>
            <span>${new Intl.NumberFormat().format(infoGasto.valor)}</span> {/*sirve para poner el punto de los decimales*/}
          </div>
          <p>{infoGasto.descripcion}</p>
        </div>
      </article>
    </>
  );
}
