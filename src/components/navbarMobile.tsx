import { XCircle } from "phosphor-react";
import { Link } from "react-scroll";

export default function NavbarMobile({ showMenu, active }: any) {
  return (
    <nav className={active ? "md:hidden w-full h-screen" : "hidden"}>
      <div className="w-full flex justify-end items-center">
        <XCircle
          size={40}
          color="#FFFFFF"
          onClick={showMenu}
          className="cursor-pointer"
        />
      </div>
      <div className="h-full flex flex-col items-center justify-around">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-xl text-white cursor-pointer hover:text-purple"
        >
          Home
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
          className="text-xl text-white cursor-pointer hover:text-purple"
        >
          Sobre
        </Link>
        <Link
          to="portfolio"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={100}
          duration={500}
          className="text-xl text-white cursor-pointer hover:text-purple"
        >
          Portfólio
        </Link>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="text-xl text-white cursor-pointer hover:text-purple"
        >
          Projetos
        </Link>
      </div>
    </nav>
  );
}
