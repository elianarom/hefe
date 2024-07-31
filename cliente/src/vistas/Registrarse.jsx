import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

const Registrarse = () => {
  return (
    <div className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
    {/**izquierdo */}
      <div className="flex-1">
      <h2>probadno</h2>
      </div>

      {/**derecho */}
      <div className="flex-1">
        <form className="flex flex-col gap-6">
          <div>
            <Label value="Nombre de usuario" />
            <TextInput type="text" placeholder="Nombre de usuario" id="username" />
          </div>
          <div>
            <Label value="Email" />
            <TextInput type="text" placeholder="email@mail.com" id="email" />
          </div>
          <div>
            <Label value="Password" />
            <TextInput type="text" placeholder="Password" id="password" />
          </div>
          <Button color="blue" pill type="submit">Registrarse</Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <p>¿Ya tenés una cuenta?</p>
          <Link to="/iniciarsesion" className="text-blue-600 font-bold">Iniciá Sesión</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Registrarse