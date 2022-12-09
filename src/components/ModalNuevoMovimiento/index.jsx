import React, { useState } from "react";
import fechaHoy from "../../functions/fechaHoy";
import { Alertas } from "../Alertas";
import "../../styles/Movimientos.css";
import registrarMovimiento from "../../functions/registroMovimiento";

export function ModalNuevoMovimiento(props) {
  const [alerta, setAlerta] = useState(false);
  let { dia, mes, año } = fechaHoy();

  return (
    <>
      <article
        className={`container-modal ${!props.isOpenModal && "invisible"}`}
      >
        <div className="modal-movimiento">
          <h3>Registrar Nuevo Movimiento</h3>
          <form
            onSubmit={(event) =>
              registrarMovimiento(
                event,
                props.infoUser,
                props.setInfoUser,
                setAlerta,
                alerta
              )
            }
            className="form-nuevo-movimiento"
          >
            <label>
              Fecha
              <input
                type="date"
                defaultValue={`${año}-${mes}-${dia}`}
                required
              />
            </label>
            <label>
              Valor
              <input type="number" required />
            </label>
            <label>
              Tipo Transaccion
              <select name="" id="" required>
                <option></option>
                <option value="ingreso" required>
                  Ingreso
                </option>
                <option value="gasto" required>
                  Gasto
                </option>
              </select>
            </label>
            <label>
              Descripcion
              <textarea name="" id="" required></textarea>
            </label>
            <div className="metodos-pago">
              Metodo de pago
              <div>
                <label>
                  <input
                    type="radio"
                    name="metodoPago"
                    value={"Efectivo"}
                    required
                  />
                  Efectivo
                </label>
                <label>
                  <input
                    type="radio"
                    name="metodoPago"
                    value={"Nequi"}
                    required
                  />
                  Nequi
                </label>
                <label>
                  <input
                    type="radio"
                    name="metodoPago"
                    value={"Daviplata"}
                    required
                  />
                  Daviplata
                </label>
                <label>
                  <input
                    type="radio"
                    name="metodoPago"
                    value={"Tarjeta"}
                    required
                  />
                  Tarjeta
                </label>
                <label>
                  <input
                    type="radio"
                    name="metodoPago"
                    value={"Otro"}
                    required
                  />
                  Otro
                </label>
              </div>
            </div>
            <div className="btns-form">
              <input
                type="button"
                value="Cancelar"
                className="btn btn-cancelar"
                onClick={() => props.setIsOpenModal(false)}
              />
              <button className="btn btn-registrar">Registrar</button>
            </div>
          </form>
        </div>
      </article>
      {alerta && (
        <Alertas
          msj={"Se genero el movimiento existosamente"}
          tipo={"exitosa"}
        />
      )}
    </>
  );
}
