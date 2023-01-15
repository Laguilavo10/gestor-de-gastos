import React from "react"
import "../../styles/CrearPerfil.css"
import fechaHoy from "../../functions/fechaHoy"
import numeroAMes from "../../functions/numeroAMes"

export function CrearPerfil(props) {

  function crearPerfil(event) {
    event.preventDefault()
    let nombre = event.target[0].value
    // let imgPerfil = event.target[1].value
    let saldo = Number(event.target[1].value)
    // try {
    //   new URL(imgPerfil)
    // } catch (error) {
    //   return alert("URL de imagen de perfil invalida. Intente de nuevo")
    // }
    let { mes, año } = fechaHoy()

    let user = {
      nombre,
      imgPerfil : 'https://i.pinimg.com/474x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg',
      saldo,
      ultimoSaldo: saldo,
      finanzas: {
        [año]: [{ mes: numeroAMes(mes), saldoFinal: 0, gastos: [] }], //se crea el objeto con la key del año en curso y con el mes en curso
      },
    }
    props.setInfoUser(user)
    localStorage.setItem("info", JSON.stringify(user))
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
            {/* <label>
              Url Imagen Perfil
              <input type="text" placeholder="https://example.com" required />
            </label> */}
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
  )
}
