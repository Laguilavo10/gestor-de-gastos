import React from 'react'
import Bajar from "../../assets/arrow-down.png";
import Subir from "../../assets/arrow-up.png";
import jsPDF from "jspdf";
import { crearPDF } from '../../functions/crearPDF';

export  function EstadisticasMes({dataMes}) {

  let ingresosArray = dataMes.gastos.filter((a)=>(a.transaccion ==='ingreso'))
  let gastosArray = dataMes.gastos.filter((a)=>(a.transaccion === 'gasto'))
 
  let totalIngresosMes = ingresosArray.length !=  0 ? ingresosArray.reduce((a , b)=>(a + b.valor), 0) : 0
  let totalGastosMes = gastosArray.length !=  0  ? gastosArray.reduce((a, b)=>(a + b.valor), 0) : 0 

  // let dataMesString = dataMes.gastos.map((a)=>{
  //   let valorDecimal = Intl.NumberFormat().format(a.valor)
  //   let valorString = valorDecimal.toString()
  //   a.valor = valorString
  //   return (a)
  // })
  



  return (
    <div className="stats-mes">
      <p className="mes">{dataMes.mes}</p>
      <article className="panel panel-stats">
        <div className="container-stats">
          <div className="stats stats-ingresos">
            <p>{new Intl.NumberFormat().format(totalIngresosMes)}</p>
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
            <p>{new Intl.NumberFormat().format(totalGastosMes)}</p>
          </div>
          <div className="title-stats">
            <img
              src={Bajar}
              alt=""
            />
            <span>Gastos</span>
          </div>
        </div>
        <button className='btn-descarga' onClick={()=>(crearPDF(dataMes, totalIngresosMes, totalGastosMes))}>Descargar Reporte</button>
      </article>
  </div>
  )
}
