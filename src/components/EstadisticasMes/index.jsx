import React from 'react'
import Bajar from "../../assets/arrow-down.png";
import Subir from "../../assets/arrow-up.png";

export  function EstadisticasMes({dataMes}) {
  let ingresosArray = dataMes.gastos.filter((a)=>(a.transaccion ==='ingreso'))
  let gastosArray = dataMes.gastos.filter((a)=>(a.transaccion === 'gasto'))
  let totalIngresosMes = ingresosArray.length !=  0 ? ingresosArray.reduce((a,b)=>(a.valor+b.valor)) : 0
  let totalGastosMes = gastosArray.length !=  0  ? gastosArray.reduce((a,b)=>(a.valor+b.valor)) : 0 

  console.log(dataMes.gastos.filter((a)=>(console.log(a))))
  let ingresos = typeof totalIngresosMes === 'object' ? totalIngresosMes.valor : totalIngresosMes
  let gastos = typeof totalGastosMes === 'object' ? totalGastosMes.valor : totalGastosMes

  return (
    <div className="stats-mes">
      <p className="mes">{dataMes.mes}</p>
      <article className="panel panel-stats">
        <div className="container-stats">
          <div className="stats stats-ingresos">
            <p>{new Intl.NumberFormat().format(ingresos)}</p>
          </div>
          <div className="title-stats">
            <img
              src={Subir}
              alt=""
            />
            <span>Ingresos</span>
          </div>
        </div>
        <div className="container-stats">
          <div className="stats stats-gastos">
            <p>{new Intl.NumberFormat().format(gastos)}</p>
          </div>
          <div className="title-stats">
            <img
              src={Bajar}
              alt=""
            />
            <span>Gastos</span>
          </div>
        </div>
        <p className="saldo-fin-mes">Saldo a fin de mes: {dataMes.saldoFinal}</p>
      </article>
  </div>
  )
}
