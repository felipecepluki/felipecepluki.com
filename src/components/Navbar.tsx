import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
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