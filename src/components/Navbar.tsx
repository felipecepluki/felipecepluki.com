import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/logo.png"

export function Navbar() {
  return (
    <div className="flex w-3/4 flex-row justify-between items-center pl-5">
      <Link href="/">
        <Image src={Logo} alt="Logo Image" className="w-[80px]" />
      </Link>
      <div className="flex w-2/3 justify-between">
        <Link href="/about" className="text-white uppercase transition-all hover:underline hover:underline-offset-2">ABOUT</Link>
        <Link href="/projects" className="text-white uppercase transition-all hover:underline hover:underline-offset-2">PROJECTS</Link>
        <a 
          target="_blank"
          rel="noreferrer noopener" 
          href="https://medium.com/@felipecepluki" 
          className="text-white uppercase transition-all hover:underline hover:underline-offset-2">
            ARTICLES
        </a>
        <Link href="/uses" className="text-white uppercase transition-all hover:underline hover:underline-offset-2">USES</Link>
        <Link href="/remember" className="text-white uppercase transition-all hover:underline hover:underline-offset-2">REMEMBER</Link>
        <Link href="/contact" className="text-white uppercase transition-all hover:underline hover:underline-offset-2">CONTACT</Link>
      </div>
    </div>
  )
}