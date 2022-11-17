import React from 'react'

export function SaldoActual() {
  return (
    <section className='panel'>
      <h4 className='saldo-title'>Saldo Actual</h4>
      <p className='saldo-actual'>$2473</p>
      <div className='botones'>
        <button className='btn-ingresar'>Ingreso</button>
        <button className='btn-gastar'>Gasto</button>
      </div>
    </section>  
  )
}
