function Paciente({ paciente, setPaciente, eliminarPaciente }) {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar =()=>{

        const respuesta = confirm("Desea eliminar el paciente")

        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className="bg-white shadow-md rounded-lg py-10 px-5 mt-3 mx-5">

            <p className="font-black uppercase text-gray-700 mb-2"> NOMBRE MASCOTA:  {""}
                <span className="font-normal normal-case ">{nombre}</span>
            </p>

            <p className="font-black uppercase text-gray-700 mb-2"> PROPIETARIO:  {""}
                <span className="font-normal normal-case ">{propietario}</span>
            </p>

            <p className="font-black uppercase text-gray-700 mb-2"> EMAIL:  {""}
                <span className="font-normal normal-case ">{email}</span>
            </p>

            <p className="font-black uppercase text-gray-700 mb-2"> FECHA DE ALTA:  {""}
                <span className="font-normal normal-case ">{fecha}</span>
            </p>

            <p className="font-black uppercase text-gray-700 mb-2"> SINTOMAS:  {""}
                <span className="font-normal normal-case ">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-5">

                <button className="bg-indigo-600 hover:bg-indigo-700 font-bold uppercase py-3 px-3 text-white rounded-lg"
                onClick={() => setPaciente(paciente)}
                >Editar</button>

                <button className="bg-red-600 hover:bg-red-700 font-bold uppercase py-3 px-3 text-white rounded-lg"
                /* onClick={()=>eliminarPaciente(id)} */
                onClick={handleEliminar}
                >Eliminar</button>
            
            </div>
        </div>
    )
}

export default Paciente
