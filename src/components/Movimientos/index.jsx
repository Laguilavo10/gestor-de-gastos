import {useEffect} from 'react'
import '../../styles/Movimientos.css'


export function Movimientos(props) {
  useEffect(() => {
    let section = document.getElementById('section')
    section.scrollTop = section.scrollHeight
  }, [])
    let movimientosOrdenados = props.children.sort((a, b)=>(a.props.infoGasto.fecha.split('-')[2] - b.props.infoGasto.fecha.split('-')[2]))
  return (
    <>
      <div className='search-container'>
        <div className='input-search'>
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" alt="" />
          <input type="text" placeholder='Buscar'/>
        </div>
        <button type='button' className='icons'>
        <img src="https://img.icons8.com/ios-glyphs/30/null/sorting-options.png"/>
        </button>
      </div>
      <section className="panel-movimientos" id='section'>
        {movimientosOrdenados}
      </section>
    
    </>
  )
}
