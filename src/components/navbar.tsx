import { List } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-scroll";
import NavbarMobile from "./navbarMobile";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="flex flex-col fixed z-10 bg-purpledark w-full justify-between">
      <div className="p-2 lg:hidden">
        <List
          color="#FFFFFF"
          size={40}
          onClick={showMenu}
          className="cursor-pointer"
        />
      </div>
      <div className="hidden md:flex flex-row justify-between p-2 w-full">
        <div className="">
          <Link
            to="#home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-white cursor-pointer font-jetbrains hover:text-purple"
          >
            🧑🏻‍💻 Felipe Cepluki
          </Link>
        </div>
        <div className="w-1/4 flex justify-between pr-10">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-white cursor-pointer hover:text-purple"
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
            className="text-white cursor-pointer hover:text-purple"
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
            className="text-white cursor-pointer hover:text-purple"
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
            className="text-white cursor-pointer hover:text-purple"
          >
            Projetos
          </Link>
        </div>
      </div>
      <div className="border-b-[1px] border-b-purple"></div>
      <NavbarMobile showMenu={showMenu} active={active} />
    </nav>
  );
}
