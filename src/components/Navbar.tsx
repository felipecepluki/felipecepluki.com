import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/logo.png"

export function Navbar() {
  return (
    <div className="flex w-2/3 flex-row justify-between items-center pl-5">
      <Link href="/">
        <i className="ri-command-line ri-2x text-white"></i>
      </Link>
      <div className="flex w-1/2 justify-between">
        <Link href="/sobre" className="text-white uppercase">SOBRE</Link>
        <Link href="/projetos" className="text-white uppercase">PROJETOS</Link>
        <a 
          target="_blank"
          rel="noreferrer noopener" 
          href="https://medium.com/@felipecepluki" 
          className="text-white uppercase">
            ARTIGOS
        </a>
        <Link href="/uses" className="text-white uppercase">USES</Link>
        <Link href="/relembre" className="text-white uppercase">RELEMBRE</Link>
      </div>
    </div>
  )
}