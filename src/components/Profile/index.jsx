import { useState } from "react";
import { ModalNuevoMovimiento } from "../ModalNuevoMovimiento";

export function Profile(props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  let saldoInicial = Number(props.infoUser.saldo);
  let saldoAñosArrays = []
  let saldoAño = 0 

  for (const key in props.infoUser.finanzas) {
    saldoAño = props.infoUser.finanzas[key].map((element) =>
      element.gastos.reduce((a, b) => {
        return b.transaccion === "ingreso" ? Number(a + b.valor) : Number(a - b.valor);
      }, saldoInicial)
    );
    saldoAñosArrays.push(saldoAño)
  }
  let saldoActual = saldoAñosArrays.reduce((a, b)=>(Number(a) + Number(b)), 0)
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
  );
}
