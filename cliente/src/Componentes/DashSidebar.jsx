import { Sidebar } from "flowbite-react"
import { useEffect, useState } from "react";
import { HiUser, HiArrowSmRight } from 'react-icons/hi'
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { cerrarSesionExito } from "../redux/usuario/usuarioSlice";


export const DashSidebar = () => {
    const location = useLocation();
  const [tab, setTab] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl) {
      setTab(tabFromUrl)
    }
  }, [location.search])

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
    <Sidebar className="w-full md:w-56">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to={'/dashboard?tab=perfil'}>
                    <Sidebar.Item active={tab === "perfil"} icon={HiUser} label={"Usuario"} labelColor="dark">
                        Perfil
                    </Sidebar.Item>
                </Link>
                <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer" onClick={handleCerrarSesion}>
                    Cerrar Sesión
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
