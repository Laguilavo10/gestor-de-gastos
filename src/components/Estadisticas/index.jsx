import React, { Children } from "react";
import '../../styles/Estadisticas.css'

export function Estadisticas({children}) {
  return (
    <section className="stats-container">
      {children}
    </section>
  );
}
