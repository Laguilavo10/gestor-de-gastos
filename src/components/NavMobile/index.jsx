import React from "react"
import "../../styles/NavMobile.css"
import { NavLink } from "react-router-dom"

export function NavMobile({ infoUser }) {
  const stylesObject = (isActive) => ({
    backgroundColor: isActive && "rgba(247, 247, 247, 0.61)",
    pointerEvents: !infoUser && "none",
  })

  return (
    <>
      <nav className="nav-mobile">
        <NavLink to="estadisticas" style={({ isActive }) => stylesObject(isActive)}>
          <img
            src="https://img.icons8.com/sf-ultralight-filled/25/null/statistics.png"
            alt=""
          />
          Estadisticas
        </NavLink>
        <NavLink to="/" style={({ isActive }) => stylesObject(isActive)}>
          <img
            src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/null/external-profile-web-smashingstocks-glyph-smashing-stocks.png"
            alt=""
          />
          Profile
        </NavLink>
        <NavLink to="movimientos" style={({ isActive }) => stylesObject(isActive)}>
          <img
            src="https://img.icons8.com/glyph-neue/64/null/activity-history.png"
            alt=""
          />
          Movimientos
        </NavLink>
      </nav>
    </>
  )
}
