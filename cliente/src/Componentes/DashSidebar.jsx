import { Sidebar } from "flowbite-react"
import { useEffect, useState } from "react";
import { HiUser, HiArrowSmRight } from 'react-icons/hi'
import { Link, useLocation } from "react-router-dom";


export const DashSidebar = () => {
    const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl) {
      setTab(tabFromUrl)
    }
  }, [location.search])

  return (
    <Sidebar className="w-full md:w-56">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to="/dashboard?tab=profile">
                    <Sidebar.Item active={tab === "perfil"} icon={HiUser} label={"Usuario"} labelColor="dark">
                        Perfil
                    </Sidebar.Item>
                </Link>
                <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">
                    Cerrar Sesión
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
