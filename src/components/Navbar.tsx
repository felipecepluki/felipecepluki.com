import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="w-screen flex items-center justify-evenly p-2">
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
        to="projects"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="font-unbounded cursor-pointer text-lg text-white"
      >
        Projetos
      </Link>
    </div>
  );
}
