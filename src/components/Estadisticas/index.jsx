import React from "react";
import Bajar from "../../assets/arrow-down.png";
import Subir from "../../assets/arrow-up.png";

export function Estadisticas() {
  return (
    <>
      <div className="stats-mes">
        <p className="mes">Noviembre</p>
        <article className="panel panel-stats">
          <div className="container-stats">
            <div className="stats stats-ingresos">
              <p>2000</p>
            </div>
            <div className="title-stats">
              <img
                src={Subir}
                alt=""
              />
              <span>Ingresos</span>
            </div>
          </div>
          <div className="container-stats">
            <p className="stats stats-gastos">500</p>
            <div className="title-stats">
              <img
                src={Bajar}
                alt=""
              />
              <span>Gastos</span>
            </div>
          </div>
          <p className="saldo-fin-mes">Saldo a fin de mes: 5000</p>
        </article>
      </div>
    </>
  );
}
