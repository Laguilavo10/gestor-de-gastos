export default function fechaHoy() {
  let fecha = new Date()
  return {
    dia: fecha.getDate().toString().length == 1 ? `0${fecha.getDate()}` : fecha.getDate(),
    mes: fecha.getMonth().toString().length == 1 ? `0${fecha.getMonth() + 1 }`: fecha.getMonth() + 1,
    año: fecha.getFullYear(),
  }
}