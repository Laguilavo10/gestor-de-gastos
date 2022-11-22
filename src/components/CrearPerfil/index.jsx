import React from 'react'
import '../../styles/CrearPerfil.css'

export  function CrearPerfil() {
  return (
    <>
    
    <section className='panel container-registro'>
        <img src="https://qonto.com/blog/images/26e46f2338257bd329808d1f684640b1.png" alt="" />
        <div>
          <h2>Crea una cuenta, para iniciar</h2>
          <form className='form-registro'>
            <label>Nombre usuario
              <input type="text" placeholder='Tu Usuario Aqui'/>
            </label>
            <label>Url Imagen Perfil
              <input type="text" placeholder="https://example.com"/>
            </label>
            <label>Saldo Inicial
                <input type="number" name="" id="" placeholder='ejemplo: 100.000'/>
            </label>
            <button className='btn-crear-registro'>
                Crear
            </button>
          </form>
        </div>

    </section>
    
    </>
  )
}
