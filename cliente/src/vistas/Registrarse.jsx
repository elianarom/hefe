import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Registrarse = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState([null]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Tenés que completar todos los campos.")
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/registrarse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/iniciar-sesion');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
    {/**izquierdo */}
      <div className="flex-1">
      <h2>probadno</h2>
      </div>

      {/**derecho */}
      <div className="flex-1">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <Label value="Nombre de usuario" />
            <TextInput type="text" placeholder="Nombre de usuario" id="username" onChange={handleChange} />
          </div>
          <div>
            <Label value="Email" />
            <TextInput type="email" placeholder="email@mail.com" id="email" onChange={handleChange} />
          </div>
          <div>
            <Label value="Password" />
            <TextInput type="password" placeholder="Password" id="password" onChange={handleChange} />
          </div>
          <Button color="blue" pill type="submit" disabled={loading}>
            {
              loading ? (
               <>
                 <Spinner size="sm" />
                 <span className="pl-3">Cargando...</span>
               </>
              ) : 'Registrarse'
            }
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <p>¿Ya tenés una cuenta?</p>
          <Link to="/iniciarsesion" className="text-blue-600 font-bold">Iniciá Sesión</Link>
        </div>
        {
          errorMessage 
        }
      </div>
    </div>
  </div>
  )
}

export default Registrarse