import React from "react";
import "../../styles/NavMobile.css";

export function NavMobile(props) {
  return (
    <>
      <nav className="nav-mobile">
        <button onClick={(a)=>(props.setoptionRender('stats'))}>
          <img
            src="https://img.icons8.com/sf-ultralight-filled/25/null/statistics.png"
            alt=""
          />
          Estadisticas
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
