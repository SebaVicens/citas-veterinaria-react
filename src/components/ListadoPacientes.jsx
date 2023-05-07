import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="mb-5 mt-10 md:w-1/2 md:mt-0 lg:w-3/5 lg:mt-0">

      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>

      <p className="mt-5 text-center text-lg">
        Administra tus {""}
        <span className="text-indigo-600 font-black ">Pacientes y Citas</span>
      </p>

      <div className="md:h-screen overflow-y-scroll">

        {
          pacientes.map((paciente) => {
            return <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          })
        }

      </div>

    </div>

  )
}

export default ListadoPacientes
