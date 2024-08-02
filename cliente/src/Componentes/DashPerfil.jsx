import { Avatar, Button, TextInput } from "flowbite-react"
import { useDispatch, useSelector } from "react-redux"
import { cerrarSesionExito } from '../redux/usuario/usuarioSlice'


const DashPerfil = () => {
    const dispatch = useDispatch();

    const handleCerrarSesion = async () => {
        try {
            const res = await fetch('/api/usuario/cerrar-sesion', {
                method: 'POST',
            });
            const data = await res.json();
            if(!res.ok) {
                console.log(data.message);
            } else {
                dispatch(cerrarSesionExito())
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    const { usuarioActual } = useSelector((state) => state.user)
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
        <h1 className="my-7 text-center font-semibold text-3xl">Mi perfil</h1>
        <form className="flex flex-col gap-5">
           <div className="w-32 h-32 self-center">
            <img alt="user" src={usuarioActual.fotoPerfil} className="w-full h-full shadow-md rounded-full" />
           </div>
            <TextInput type="text" id="username" placeholder="Username" defaultValue={usuarioActual.username} />
            <TextInput type="email" id="email" placeholder="Email" defaultValue={usuarioActual.email} />
            <TextInput type="password" id="password" placeholder="Password" />
            <Button type="submit" outline>
                Actualizar
            </Button>
        </form>
        <div className="text-red-500 flex justify-between mt-5">
            <span className="cursor-pointer">Eliminar cuenta</span>
            <span onClick={handleCerrarSesion} className="cursor-pointer">Cerrar Sesión</span>
        </div>
    </div>
  )
}

export default DashPerfil