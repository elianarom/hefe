import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


const RutaProtegida = () => {
    const { usuarioActual } = useSelector(state => state.user)
  return usuarioActual ? <Outlet /> : <Navigate to='/iniciar-sesion' />
}

export default RutaProtegida