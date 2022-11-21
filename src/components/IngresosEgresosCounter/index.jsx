import React from "react";

export function IngresosEgresosCounter() {
  return (
    <>
      <section className="panel panel-stats">
        <div className="stats">
          <div className="ingresos-mes">
            <span>600.000</span>
            <p><img src="https://img.icons8.com/ios-filled/50/0C8418/send-letter--v1.png" alt="" /> Ingresos</p>
          </div>
          <div className="gastos-mes">
            <span>600.000</span>
            <p><img src="https://img.icons8.com/ios-filled/50/960F0F/low-importance.png" alt="" /> Gastos</p>
          </div>
        </div>
        {/* <span id="msj-mes">*en el mes de novimebre</span> */}
      </section>
    </>
  );
}
