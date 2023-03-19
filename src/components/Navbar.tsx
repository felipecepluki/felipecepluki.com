import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="w-screen lg:flex items-center justify-end p-2 pt-5 pr-10 border-b-2 border-b-purple bg-purpledark ">
      <div className="flex lg:flex-row items-center lg:justify-between lg:w-1/3 lg:h-full sm:w-full sm:justify-between">
        <Link
          activeClass="active"
          to="initial"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-roboto uppercase cursor-pointer text-lg text-white"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-roboto uppercase cursor-pointer text-lg text-white"
        >
          Sobre
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-roboto uppercase cursor-pointer text-lg text-white"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-roboto uppercase cursor-pointer text-lg text-white"
        >
          Projetos
        </Link>
      </div>
    </nav>
  );
}
