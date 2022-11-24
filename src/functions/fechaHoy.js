export default function fechaHoy() {
  let fecha = new Date();
  return {
    dia: fecha.getDate(),
    mes: (fecha.getMonth() + 1),
    año: fecha.getFullYear(),
  };
}