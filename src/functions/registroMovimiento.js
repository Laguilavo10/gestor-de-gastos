import numeroAMes from "./numeroAMes"
import { limpiarInputs } from "./limpiarInputs"
import mostrarAlerta from "./mostrarAlerta"

export default function registrarMovimiento(
  event,
  infoUser,
  setInfoUser,
  setAlerta,
  alerta
  ) {

  event.preventDefault()

  let inputsArray = [...event.target]

  let metodo = inputsArray.find((a) => a.checked)
  let infoMovimiento = {
    fecha: event.target[0].value,
    valor: Number(event.target[1].value),
    transaccion: event.target[2].value,
    descripcion: event.target[3].value,
    metodo: metodo.value,
  }

  let [añoMovimiento, mesMovimiento, diaMovimiento] =
  infoMovimiento.fecha.split("-")
  let mesMovimientoString = numeroAMes(mesMovimiento)

  let existeAño = infoUser.finanzas[añoMovimiento] //validar si existe el año

  if (!infoUser.finanzas[añoMovimiento]) {
    infoUser.finanzas[añoMovimiento] = []
  }

  let existeMes = infoUser.finanzas[añoMovimiento].some( //validar si existe el mes
    (a) => a.mes === mesMovimientoString
  )

  if (!existeMes) {
    infoUser.finanzas[Number(añoMovimiento)].push({
      mesNumero:mesMovimiento,
      mes: mesMovimientoString,
      saldoFinal: 0,
      gastos: [],
    })
  }

  let i = infoUser.finanzas[añoMovimiento].findIndex((a) => a.mes === mesMovimientoString)
  infoUser.finanzas[añoMovimiento][i].gastos.push(infoMovimiento)

  localStorage.setItem("info", JSON.stringify(infoUser))
  setInfoUser({...infoUser})
  mostrarAlerta(setAlerta, alerta)
  limpiarInputs(event)
}
