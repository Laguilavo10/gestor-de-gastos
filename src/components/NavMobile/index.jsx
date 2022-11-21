import React from "react";
import { SaldoActual } from "../SaldoActual";

export function NavMobile(props) {
  return (
    <>
      <div className="logo">
        <img
          src="https://img.icons8.com/fluency/48/null/financial-growth-analysis.png"
          alt="favicon"
        />
        <h1>
          Gestor
          <br />
          De gastos
        </h1>
      </div>
      <nav className="nav-mobile">
        <button onClick={(a)=>(props.setoptionRender('stats'))}>
          <img
            src="https://img.icons8.com/glyph-neue/64/null/wallet.png"
            alt=""
          />
          Saldo & Stats
        </button>
        <button onClick={(a)=>(props.setoptionRender('profile'))}>
          <img
            src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/null/external-profile-web-smashingstocks-glyph-smashing-stocks.png"
            alt=""
          />
          Profile
        </button>
        <button onClick={(a)=>(props.setoptionRender('movimientos'))}>
          <img
            src="https://img.icons8.com/glyph-neue/64/null/activity-history.png"
            alt=""
          />
          Movimientos
        </button>
      </nav>
    </>
  );
}
