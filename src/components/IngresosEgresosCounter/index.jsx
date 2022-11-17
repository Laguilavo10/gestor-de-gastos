import React from "react";

export function IngresosEgresosCounter() {
  return (
    <>
      <section className="panel panel-stats">
        <div className="stats">
          <div className="ingresos-mes">
            <span>600.000</span>
            <p>Ingresos</p>
          </div>
          <div className="gastos-mes">
            <span>600.000</span>
            <p>Gastos</p>
          </div>
        </div>
        <span id="msj-mes">*en el mes de novimebre</span>
      </section>
    </>
  );
}
