import jsPDF from "jspdf";

let  header = createHeaders(["fecha", "descripcion", "metodo", "valor", "transaccion"]);

function createHeaders(keys) {
  return keys.map(key => ({
    'name': key,
    'prompt': key,
    'width':50,
    'align':'center',
    'padding':0
  }));
}

export function crearPDF(dataMes, totalIngresosMes, totalGastosMes, año) {
    let dataMesString = dataMes.gastos.map((a)=>{
        let valorDecimal = Intl.NumberFormat().format(a.valor)
        let valorString = valorDecimal.toString()
        a.valor = valorString
        return (a)
    })

  totalIngresosMes = Intl.NumberFormat().format(totalIngresosMes)
  totalGastosMes = Intl.NumberFormat().format(totalGastosMes)

  let doc = new jsPDF()
  doc.text(`Mes ${dataMes.mes}/${año} - Movimientos`, 10, 20)
  doc.text(`El total de ingresos fue : $ ${totalIngresosMes} `, 10, 30)
  doc.text(`El total de gastos fue : $ ${totalGastosMes} `, 10, 40)
  doc.table(10, 50, dataMesString, header)
  doc.save(`gastos-${dataMes.mes}`)
}