import React from "react";
import "../../styles/CrearPerfil.css";

export function CrearPerfil(props) {
  
  function crearPerfil(event) {
    event.preventDefault();
    let nombre = event.target[0].value;
    let imgPerfil = event.target[1].value;
    let saldo = event.target[2].value;
    try {
      new URL(imgPerfil);
    } catch (error) {
      alert("URL de imagen de perfil invalida. Intente de nuevo");
      return;
    }
    let user = {
      nombre,
      imgPerfil,
      saldo,
      ultimoSaldo:saldo,
      finanzas:[]
    }
    props.setInfoUser(user)
    localStorage.setItem('info', JSON.stringify(user))
  }

  return (
    <>
      <section className="panel container-registro">
        <img
          src="https://qonto.com/blog/images/26e46f2338257bd329808d1f684640b1.png"
          alt=""
        />
        <div>
          <h2>
            Crea una cuenta, <br /> para iniciar
          </h2>
          <form className="form-registro" onSubmit={crearPerfil}>
            <label>
              Nombre usuario
              <input type="text" placeholder="Tu Usuario Aqui" required />
            </label>
            <label>
              Url Imagen Perfil
              <input type="text" placeholder="https://example.com" required />
            </label>
            <label>
              Saldo Inicial
              <input
                type="number"
                name=""
                id=""
                placeholder="ejemplo: 100.000"
                required
              />
            </label>
            <button className="btn-crear-registro">Crear</button>
          </form>
        </div>
      </section>
    </>
  );
}
