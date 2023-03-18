import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="w-screen flex items-center justify-end p-2 pt-5 pr-10 border-b-2 border-b-purple bg-purpledark">
      <div className="flex items-center justify-between w-1/3">
        <Link
          activeClass="active"
          to="initial"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-unbounded cursor-pointer text-lg text-white"
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
          className="font-unbounded cursor-pointer text-lg text-white"
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
          className="font-unbounded cursor-pointer text-lg text-white"
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
          className="font-unbounded cursor-pointer text-lg text-white"
        >
          Projetos
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-unbounded cursor-pointer text-lg text-white"
        >
          Contato
        </Link>
      </div>
    </div>
  );
}
