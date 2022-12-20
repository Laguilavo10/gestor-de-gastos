import React from "react";
import arrowDown from '../../assets/arrow-down.png'
import arrowUp from '../../assets/arrow-up.png'
import numeroAMes from "../../functions/numeroAMes";
import papelera from '../../assets/delete-trash-svgrepo-com.svg'

export function ItemMovimiento({infoGasto, infoUser, setInfoUser}) {
  let fecha = infoGasto.fecha.split('-')
  let transaccion = infoGasto.transaccion === 'ingreso' ? ['ingreso-item', 'reverse-item', arrowUp] : ['gasto-item', '', arrowDown]
  let mes = numeroAMes(fecha[1])
  let mesAbreviado = numeroAMes(fecha[1]).split('', 3).join('')

  const eliminarItem = ()=>{
    let nose = infoUser.finanzas[fecha[0]].findIndex((a)=>(a.mes === mes))
    let i = infoUser.finanzas[fecha[0]][nose].gastos.findIndex((a)=>(a == infoGasto))
    infoUser.finanzas[fecha[0]][nose].gastos.splice(i, 1)
    localStorage.setItem("info", JSON.stringify(infoUser))
    let copiaInfoUser = JSON.parse(JSON.stringify(infoUser))
    setInfoUser(copiaInfoUser)
  }

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
          <img src={papelera} alt="eliminar" className="eliminar-icon" onClick={eliminarItem}/>
        </div>
      </article>
    </>
  );
}
