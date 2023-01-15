import { useState, useEffect } from 'react';

export function useMovimientos(infoUser, año) {
  const [movimientosRender, setMovimientosRender] = useState([]);

  useEffect(() => {
    const finanzasAñoActual = infoUser.finanzas[año].flatMap((a)=>(a.gastos));
    const movimientosOrdenados = finanzasAñoActual.sort((a, b) => a.fecha.split("-")[2] - b.fecha.split("-")[2])
    setMovimientosRender(movimientosOrdenados);
  }, [infoUser.finanzas[año]]);

  return movimientosRender;
}