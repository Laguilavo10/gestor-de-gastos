import { useState } from "react"
import { ModalNuevoMovimiento } from "../../components/ModalNuevoMovimiento"

export function Profile(props) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  let saldoInicial = Number(props.infoUser.saldo)
  let saldoAñosArrays = []

  for (const key in props.infoUser.finanzas) {
    let totalAño = props.infoUser.finanzas[key]
      .flatMap((a) => a.gastos)
      .reduce(
        (a, b) => (b.transaccion === "ingreso" ? a + b.valor : a - b.valor),
        0
      )
      saldoAñosArrays.push(totalAño)
  }

  let saldoActual = (saldoAñosArrays.reduce((a, b) => a + b, 0)) + saldoInicial

  return (
    <>
      <aside className="panel-profile panel">
        <div className="info-profile">
          <img src={props.infoUser.imgPerfil} alt="profile-img" />
          <p>{props.infoUser.nombre}</p>
        </div>
        <div className="saldo-actual">
          <h4>Saldo Actual</h4>
          <p>${Intl.NumberFormat().format(saldoActual)}</p>
          <div>
            <button onClick={(a) => setIsOpenModal(true)}>
              Nuevo Movimiento
            </button>
          </div>
        </div>
      </aside>

      {isOpenModal && (
        <ModalNuevoMovimiento
          infoUser={props.infoUser}
          setInfoUser={props.setInfoUser}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </>
  )
}
