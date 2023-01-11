export  const busquedaMovimientos = (event, infoUser, año, setMovimientosRender) => {
  let busqueda = event.target.value
  let filtro = infoUser.finanzas[año]
    .flatMap((gastosArray) => gastosArray.gastos)
    .filter(
      (movimiento) => movimiento.descripcion.includes(busqueda) && movimiento
    )
  busqueda ? setMovimientosRender(filtro) : setMovimientosRender(movimientosOrdenados)
}