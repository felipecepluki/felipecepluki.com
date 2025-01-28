import { ChevronsDown } from 'lucide-react';

export default function InitialSection() {
  return (
    <section id="home" className="flex items-center w-full font-bebas justify-center bg-black h-screen">
      <div className="tex-center text-white">
        <h1 className="text-6xl font-extrabold tracking-widest uppercase">FELIPE</h1>
        <h2 className="text-4xl font-bold mt-4">CEPLUKI LOPES</h2>
      </div>
      <div className="absolute inset-x-0 bottom-4 z-20 animate-bounce flex items-center justify-center flex-col text-gray-600">
        <ChevronsDown />
        <span className="text-md mt-1">Role para baixo</span>
      </div>
    </section>
  )
}