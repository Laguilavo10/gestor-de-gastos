import React from 'react'
// import Menu from "../../assets/icons8-menú.gif";

export  function Profile(props) {
  console.log(props)
  return (
    <>
    <aside className='panel-profile panel'>
      <div className='info-profile'>
        <img src={props.infoUser.imgPerfil} alt="profile-img" />
        <p>{props.infoUser.nombre}</p>
      </div>
      <div className='saldo-actual'>
        <h4>Saldo Actual</h4>
        <p>${props.infoUser.saldo}</p>
      <div>
        <button onClick={(a)=>(props.setIsOpenModal(true))}>Nuevo Movimiento</button>
      </div>
      </div>
    </aside>
    
    </>
  )
}
