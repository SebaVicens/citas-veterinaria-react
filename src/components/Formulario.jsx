/* IMPORTO EL useSTATE */
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  /* GENERO LAS VARIABLES Y LOS MODIFICADORES PARA DICHAS VARIABLES */
  const [nombre, setNombre] = useState("");
  const [propietario, setpropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setpropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = (() => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  })

  /* GENERO UNA FUNCION PARA CAPTURAR ERRORES EN EL FORMULARIO */
  const handleSubmit = (e) => {

    e.preventDefault();

    /* GENERO UN ARRAY CON LOS VARIABLES DE ARRIBA Y PREGUNTO SI TODAS ESTAN LLENAS */
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {

      setError(true)
      return;
    }

    setError(false)

    const nuevoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if (paciente.id) {
      /// EDITANDO REGISTRO
      nuevoPaciente.id = paciente.id

      const pacienteActualizado = pacientes.map(pacient => pacient.id === paciente.id ? nuevoPaciente : pacient)

      setPacientes(pacienteActualizado)

      setPaciente({})


    } else {
      /// CREANDO REGISTRO
      nuevoPaciente.id = generarId()
      setPacientes([...pacientes, nuevoPaciente])
    }



    /// REINICIAR EL FORM
    setNombre("")
    setpropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">

      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center">Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      {/* EVENTO (onSubmit), QUE LLAMA A LA FUNCIO ARRIBA DECLARADA */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mt-3 mx-5">

        {error && <Error />}

        <div className="mb-5">
          <label htmlFor="nombre" className="font-bold uppercase block text-gray-700 ">NOMBRE DE MASCOTA</label>
          <input
            id="nombre"
            placeholder="Nombre de Mascota"
            className="placeholder-gray-400 border-2 w-full rounded-md p-2"
            value={nombre}
            /* EVENTO (onChange) QUE SETEA (modifica) EL NOMBRE */
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="font-bold uppercase block text-gray-700 ">NOMBRE DEL PROPIETARIO</label>
          <input
            id="propietario"
            placeholder="Nombre del propietario"
            className="placeholder-gray-400 border-2 w-full rounded-md p-2"
            value={propietario}
            onChange={(e) => setpropietario(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="font-bold uppercase block text-gray-700 ">EMAIL</label>
          <input
            id="email"
            type="email"
            placeholder="Email de contacto propietario"
            className="placeholder-gray-400 border-2 w-full rounded-md p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="font-bold uppercase block text-gray-700">FECHA DE ALTA</label>
          <input
            id="alta"
            type="date"
            className="placeholder-gray-400 border-2 w-full rounded-md p-2"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)} />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="font-bold uppercase block text-gray-700 ">SINTOMAS</label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas"
            className="placeholder-gray-400 border-2 w-full rounded-md p-2"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}></textarea>
        </div>

        <input
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          className="p-3 bg-indigo-600 hover:bg-indigo-700 w-full text-white font-bold cursor-pointer transition-all" />

      </form>

    </div>
  )
}

export default Formulario
