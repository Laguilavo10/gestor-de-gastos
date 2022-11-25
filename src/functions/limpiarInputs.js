import fechaHoy from "./fechaHoy";


export  const limpiarInputs = (event)=>{
  let { dia, mes, año } = fechaHoy();
  event.target[0].value = `${año}-${mes}-${dia}`
  event.target[1].value = ''
  event.target[2].value = ''
  event.target[3].value = ''
  event.target[4].checked = false
  event.target[5].checked = false
  event.target[6].checked = false
  event.target[7].checked = false
  event.target[8].checked = false
}