import { Avatar, Button, TextInput } from "flowbite-react"
import { useSelector } from "react-redux"

const DashPerfil = () => {
    const { usuarioActual } = useSelector((state) => state.user)
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
        <h1 className="my-7 text-center font-semibold text-3xl">Mi perfil</h1>
        <form className="flex flex-col gap-4">
           <div className="w-32 h-32 self-center">
            <Avatar alt="user" img={usuarioActual.fotoPerfil} rounded className="w-full h-full border border-blue-600 shadow-md rounded-full" />
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
            <span className="cursor-pointer">Cerrar Sesión</span>
        </div>
    </div>
  )
}

export default DashPerfil