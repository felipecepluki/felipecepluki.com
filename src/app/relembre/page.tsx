import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: 'Relembre | Felipe Cepluki',
  description: 'Bem-vindo ao meu site pessoal 👨‍💻',
}

export default function Relembre() {
  return (
    <div className="bg-purpledark w-full h-screen flex flex-col justify-between">
       <nav className="w-full">
        <Navbar />
      </nav>
      <main className="w-full h-full flex flex-col items-center justify-center">
        <p className="italic text-white">
          A persistência é muito importante. Você não deve desistir, a menos que seja forçado a desistir.
        </p>
        <p className="text-white font-bold"> - Elon Musk 🚀</p>
      </main>
      <footer className="flex items-center justify-center pb-2">
        <Footer />
      </footer>
    </div>
  )
}