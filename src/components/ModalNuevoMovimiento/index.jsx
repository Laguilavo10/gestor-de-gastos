import React, { createFactory } from "react";
import '../../styles/Movimientos.css'
export function ModalNuevoMovimiento(props) {
  const registrarMovimiento = (event) => {
    event.preventDefault();
    let metodo = ''
    for (let index = 4; index <= 8; index++) {
      let i = event.target[index]
      if (i.checked) {
        metodo = i.value
      }
    }
    let infoMovimiento = {
      fecha:event.target[0].value,
      valor:Number(event.target[1].value),
      transaccion:event.target[2].value,
      descripcion:event.target[3].value,
      metodo
    }
    let [añoMovimiento, mesMovimiento, diaMovimiento] = infoMovimiento.fecha.split('-')
    let mesHoy = numeroAMes(mesMovimiento)
    console.log(mesHoy)
    let existeMes =  props.infoUser.finanzas[añoMovimiento].some((a)=>a.mes === mesHoy)
    // let existeMes =  props.infoUser.finanzas[añoMovimiento].some((a)=>console.log(a))

    console.log(existeMes)
    if (!existeMes) {
      props.infoUser.finanzas[añoMovimiento].push({mes:mesHoy,saldoFinal:0,gastos:[]})
    }

    let i = props.infoUser.finanzas[añoMovimiento].findIndex((a)=>(a.mes === mesHoy))
    props.infoUser.finanzas[añoMovimiento][i].gastos.push(infoMovimiento)

    localStorage.setItem("info", JSON.stringify(props.infoUser))
    props.setInfoUser(props.infoUser)
    alert('Registro de Movimiento exitoso. Si deseea verlo dirigase a "Movimientos"')
  };

  const limpiarInputs = (event)=>{
    event.target[1].value = ''
    event.target[2].value = ''
    event.target[3].value = ''
    event.target[4].checked = false
    event.target[5].checked = false
    event.target[6].checked = false
    event.target[7].checked = false
    event.target[8].checked = false
  }

  function numeroAMes(numero) {
    let meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return meses[numero - 1];
  }
  function fechaHoy() {
    let fecha = new Date();
    return {
      dia: fecha.getDate(),
      mes: (fecha.getMonth() + 1),
      año: fecha.getFullYear(),
    };
  }

  let { dia, mes, año } = fechaHoy();

  return (
    <article className={`container-modal ${!props.isOpenModal && 'invisible'}`}>
      <div className="modal-movimiento">
        <h3>Registrar Nuevo Movimiento</h3>
        <form onSubmit={registrarMovimiento} className="form-nuevo-movimiento">
          <label>
            Fecha
            <input type="date" defaultValue={`${año}-${mes}-${dia}`} />
          </label>
          <label>
            Valor
            <input type="number" required/>
          </label>
          <label>
            Tipo Transaccion
            <select name="" id="" required>
              <option></option>
              <option value="ingreso" required>Ingreso</option>
              <option value="gasto" required>Gasto</option>
            </select>
          </label>
          <label>
            Descripcion
            <textarea name="" id="" required></textarea>
          </label>
          <div className="metodos-pago">
            Metodo de pago
            <div>
              <label>
                <input type="radio" name="metodoPago" value={'Efectivo'} required/>
                Efectivo
              </label>
              <label>
                <input type="radio" name="metodoPago" value={'Nequi'} required/>
                Nequi
              </label>
              <label>
                <input type="radio" name="metodoPago" value={'Daviplata'} required/>
                Daviplata
              </label>
              <label>
                <input type="radio" name="metodoPago" value={'Tarjeta'} required/>
                Tarjeta
              </label>
              <label> 
                <input type="radio" name="metodoPago" value={'Otro'} required/>
                Otro
              </label>

            </div>

          </div>
          <div className="btns-form">
            <input type="button" value="Cancelar" className="btn btn-cancelar" onClick={()=>(props.setIsOpenModal(false))}/>
            <button className="btn btn-registrar">Registrar</button>
          </div>
        </form>
      </div>
    </article>
  );
}
