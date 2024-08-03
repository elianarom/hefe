import { Avatar, Button, Dropdown, Navbar } from "flowbite-react"
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/img/logo-hefe.svg'
import { useDispatch, useSelector } from 'react-redux';
import { cerrarSesionExito } from "../redux/usuario/usuarioSlice";

const Header = () => {
  const path = useLocation().pathname;
  const { usuarioActual } = useSelector(state => state.user)
  const dispatch = useDispatch();

  const handleCerrarSesion = async () => {
    try {
        const res = await fetch('/api/usuario/cerrar-sesion', {
            method: 'POST',
        });
        const data = await res.json();
        if(!res) {
            console.log(data.message);
        } else {
          dispatch(cerrarSesionExito())
        }
    } catch (error) {
        console.log(error.message)
    }
}

  return (
    <Navbar>
      <div className='flex flex-shrink-0 items-center'>
        <img href="/" className="h-7 w-auto mr-8" src={logo} alt="logo hefe" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={ path === "/" } as={'div'}><Link to="/">Home</Link></Navbar.Link>
        <Navbar.Link active={ path === "/herramientas" } as={'div'}><Link to="/herramientas">Herramientas</Link></Navbar.Link>
        <Navbar.Link active={ path === "/preguntasfrecuentes" } as={'div'}><Link to="/preguntasfrecuentes">Preguntas Frecuentes</Link></Navbar.Link>
      </Navbar.Collapse>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-12 hidden sm:inline" color="blue-950" pill>
          <FaMoon />
        </Button>
        { usuarioActual ? (
          <Dropdown
          arrowIcon={false} inline label={ <Avatar alt="user" img={usuarioActual.fotoPerfil} rounded /> } >
            <Dropdown.Header>
              <span className="block text-sm font-bold truncate">@{usuarioActual.username}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=perfil'}>
              <Dropdown.Item>Perfil</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleCerrarSesion}>Cerrar sesión</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/iniciar-sesion" className="py-3 px-6 text-lg rounded-full cursor-pointer font-medium bg-blue-700 text-white hover:bg-blue-950 shadow-xs transition-all duration-500">Iniciar Sesión</Link>
        )
      }
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}

export default Header