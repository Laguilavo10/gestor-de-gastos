import React from 'react'
// import Menu from "../../assets/icons8-menú.gif";

export  function Profile() {
  return (
    <>
    <aside className='panel-profile panel'>
      <div className='info-profile'>
        <img src="https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg" alt="profile-img" />
        <p>Andres Laguilavo</p>
      </div>
      <div className='saldo-actual'>
        <h4>Saldo Actual</h4>
        <p>$2000</p>
      </div>
      <div>
        <button>Nuevo Movimiento</button>
      </div>
    </aside>
    
    </>
  )
}
