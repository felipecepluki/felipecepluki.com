import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <div className="bg-purpledark h-screen w-full flex flex-col justify-between">
      <nav className="w-full">
        <Navbar />
      </nav>
      <main className="w-full h-full flex items-center justify-center">
        <h1 className="font-stretchpro text-white text-center text-6xl">felipee ceepluki</h1>
      </main>
      <footer className="flex items-center justify-center pb-2">
        <Footer />
      </footer>
    </div>
  )
}
