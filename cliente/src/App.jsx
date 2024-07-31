import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './vistas/Home'
import Herramientas from './vistas/Herramientas'
import PreguntasFrecuentes from './vistas/PreguntasFrecuentes'
import IniciarSesion from './vistas/IniciarSesion'
import CerrarSesion from './vistas/CerrarSesion'
import Dashboard from './vistas/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/preguntasfrecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/iniciarsesion" element={<IniciarSesion />} />
        <Route path="/cerrarsesion" element={<CerrarSesion />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App