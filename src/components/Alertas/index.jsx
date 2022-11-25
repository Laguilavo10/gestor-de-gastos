import {useEffect} from 'react'
import '../../styles/Alertas.css'


export  function Alertas({msj, tipo}) {
  
  return (
    <div>
      <p className={`alertas ${tipo === 'exitosa' ? 'alerta-exitosa' : 'alerta-error'}`}>{msj}</p>
    </div>
  )
}
