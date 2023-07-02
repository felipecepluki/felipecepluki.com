import Image from 'next/image'
import Logo from "@/assets/images/logoDark.png"

export default function Home() {
  return (
    <div className="bg-purpledark h-screen w-full flex flex-col justify-between">
      <main className="w-full h-full flex items-center justify-center">
        <div className="circle relative w-[200px] h-[200px] holographic rounded-[50%] flex justify-center items-center">
          <div className="text flex items-center justify-center w-full h-full">
            <Image src={Logo} alt="Logo Image" className="w-[140px]" />
          </div>
        </div>
        <h1 className="font-stretchpro text-white text-center text-6xl">felipee ceepluki</h1>
      </main>
    </div>
  )
}
