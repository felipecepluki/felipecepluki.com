import { Footer } from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-purpledark h-screen w-full flex flex-col justify-between">
      <main className="w-full h-full flex items-center justify-center">
        <h1 className="font-stretchpro text-white text-4xl">felipee ceepluki</h1>
      </main>
      <footer className="flex items-center justify-center pb-2">
        <Footer />
      </footer>
    </div>
  )
}
