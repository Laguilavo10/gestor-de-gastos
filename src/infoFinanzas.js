// import { Estadisticas } from "./components/Estadisticas";

export let user =[
  {
    nombre: "Andres Laguilavo",
    saldo: 2000,
    ultimoSaldo:327.665,
    finanzas:[
      {
        mes:'Noviembre',
        saldoFinal: 7,
        gastos:[
          {
            valor:137000,
            fecha:'19/11/22',
            descripcion:'Abono deuda rocio (cuota Platzi)',
            metodo:'Efectivo',
            tipoMovimiento:'ingreso',
          },
          {
            valor:100000,
            fecha:'21/11/22',
            descripcion:'Regalo cumpleaños Tia Bibis',
            metodo:'Efectivo',
            tipoMovimiento:'ingreso',
          },
          {
            valor:327665,
            fecha:'21/11/22',
            descripcion:'Saldo Tarjeta Fallabella',
            metodo:'Tarjeta Credito/Debito',
            tipoMovimiento:'ingreso',
          },
        ]
      }
    ]
  },

]