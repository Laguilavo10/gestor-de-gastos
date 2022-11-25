import React from "react";
import arrowDown from '../../assets/arrow-down.png'
import arrowUp from '../../assets/arrow-up.png'
import numeroAMes from "../../functions/numeroAMes";

export function ItemMovimiento({infoGasto}) {
  let fecha = infoGasto.fecha.split('-')
  let transaccion = infoGasto.transaccion === 'ingreso' ? ['ingreso-item', 'reverse-item', arrowUp] : ['gasto-item', '', arrowDown]
  let mesAbreviado = numeroAMes(fecha[1]).split('', 3).join('')

  return (
    <>
      <article className={`${transaccion[1]} item`}>
        <div className="fecha-item">{fecha[2]} <br />{mesAbreviado}/{fecha[0]}</div>
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
