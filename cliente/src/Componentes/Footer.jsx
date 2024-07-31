import { Footer, FooterBrand, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";
import logo from '../assets/img/logo-hefe-blanco.svg'


const FooterCom = () => {
  return (

    <Footer>
      <div className="w-full text-center bg-blue-950 px-10 py-10">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="#"
            src={logo}
            alt="hefe Logo"
            name=""
          />
          <FooterLinkGroup>
            <FooterLink href="#" className="text-white">Home</FooterLink>
            <FooterLink href="#" className="text-white">Herramientas</FooterLink>
            <FooterLink href="#" className="text-white">Preguntas Frecuentes</FooterLink>
            <FooterLink href="#" className="text-white">Registrarse</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterCopyright className="text-white pt-5" href="#" by="hefe" year={2024} />
      </div>
    </Footer>

  )
}

export default FooterCom