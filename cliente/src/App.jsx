import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './vistas/Home'
import Herramientas from './vistas/Herramientas'
import PreguntasFrecuentes from './vistas/PreguntasFrecuentes'
import IniciarSesion from './vistas/IniciarSesion'
import Registrarse from './vistas/Registrarse'
import CerrarSesion from './vistas/CerrarSesion'
import Dashboard from './vistas/Dashboard'
import Header from "./Componentes/Header"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/preguntasfrecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/iniciarsesion" element={<IniciarSesion />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/cerrarsesion" element={<CerrarSesion />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App