import React from 'react'

export  function Profile() {
  return (
    <aside className='panel panel-profile'>
      <div className='titulo'>
        <img src="https://img.icons8.com/fluency/48/null/financial-growth-analysis.png" alt="favicon" />
        <h1>Gestor<br/>De gastos</h1>
      </div>
      <div className='info-profile'>
        <img src="https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg" alt="profile-img" />
        <p>Andres Laguilavo</p>
      </div>
      <div className='options'>
        <button>Main</button>
        <button>Historial</button>
      </div>
      
    </aside>
  )
}
