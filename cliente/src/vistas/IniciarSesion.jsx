import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { inicioDeSesion, inicioDeSesionExito, inicioDeSesionFallido } from "../redux/usuario/usuarioSlice.js";

const IniciarSesion = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password) {
      return dispatch(inicioDeSesionFallido("Tenés que completar todos los campos."));
    }
    try {
      dispatch(inicioDeSesion());
      const res = await fetch('/api/auth/iniciar-sesion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(inicioDeSesionFallido(data.message));
      }
      if(res.ok) {
        dispatch(inicioDeSesionExito(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(inicioDeSesionFallido(error.message));
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
            <Label value="Email" />
            <TextInput type="email" placeholder="email@mail.com" id="email" onChange={handleChange} />
          </div>
          <div>
            <Label value="Password" />
            <TextInput type="password" placeholder="********" id="password" onChange={handleChange} />
          </div>
          <Button color="blue" pill type="submit" disabled={loading}>
            {
              loading ? (
               <>
                 <Spinner size="sm" />
                 <span className="pl-3">Cargando...</span>
               </>
              ) : 'Iniciar Sesión'
            }
          </Button>
          {/**<AuthGoogle />*/}
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <p>¿No tenés una cuenta?</p>
          <Link to="/registrarse" className="text-blue-600 font-bold">Registrate</Link>
        </div>
        {errorMessage && (
            <Alert className="mt-5" color="failure">{errorMessage}</Alert>
        )}
      </div>
    </div>
  </div>
  )
}

export default IniciarSesion