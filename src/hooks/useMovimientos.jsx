import { useState, useEffect } from 'react';

export function useMovimientos(infoUser, año) {
  const [movimientosRender, setMovimientosRender] = useState([]);

  useEffect(() => {
    const finanzasAñoActual = infoUser.finanzas[año].flatMap((a)=>(a.gastos));
    
    const movimientosOrdenados = finanzasAñoActual.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime()) 
    
    setMovimientosRender(movimientosOrdenados)

  }, [infoUser.finanzas[año]]);

  return movimientosRender;
}