import { Button, Navbar } from "flowbite-react"
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/img/logo-hefe.svg'

const Header = () => {
  const path = useLocation().pathname;

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
        <Link to="/registrarse" className="py-3 px-6 text-lg rounded-full cursor-pointer font-medium bg-blue-700 text-white hover:bg-blue-950 shadow-xs transition-all duration-500">Registrarse</Link>
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}

export default Header