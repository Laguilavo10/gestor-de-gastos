import React from 'react'
import '../../styles/NoHayRegistro.css'
export  function NoHayRegistro({text = ""}) {
  return (
    <>
    <div className='no-registro'>
      <p>
        No hay ningun movimiento generado {text}. Dirigase a su perfil y cree uno 
      </p>
      <p className='apuntador'>🔽</p>
    </div>
    </>
  )
}
