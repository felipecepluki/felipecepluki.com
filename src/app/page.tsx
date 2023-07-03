import Image from 'next/image'
import Logo from "@/assets/images/logoDark.png"

export default function Home() {
  return (
    <div className="bg-purpledark h-screen w-full flex flex-col justify-between">
      <main className="w-full h-full flex items-center justify-center">
        <h1 className="font-stretchpro text-white text-center text-6xl">felipee ceepluki</h1>
      </main>
    </div>
  )
}
