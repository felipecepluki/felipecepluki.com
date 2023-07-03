export const metadata = {
  title: 'Projetos | Felipe Cepluki',
  description: 'Bem-vindo ao meu site pessoal 👨‍💻',
}

export default function Projects() {
  return (
    <div className="h-screen flex ml-20 justify-center flex-col">
      <div className="flex flex-col">
        <h1 className="text-white font-stretchpro">2023</h1>
        <a 
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/felipecepluki/ui-youtube"
          className="text-white font-stretchpro underline underline-offset-4"
          >
          UI Youtube
        </a>
        <a 
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/felipecepluki/maythe4thbewithyou"
          className="text-white mt-2 font-stretchpro underline underline-offset-4"
          >
          Star Wars App
        </a>
      </div>
      <div className="mt-10 flex flex-col">
        <h1 className="text-white font-stretchpro">2022</h1>
        <a 
          target="_blank"
          rel="noreferrer noopener"
          href="https://lopesesantos.com"
          className="text-white font-stretchpro underline underline-offset-4"
        >
          Lopes e Santos
        </a>
        <a 
          target="_blank"
          rel="noreferrer noopener"
          href="https://felipecepluki.com"
          className="text-white mt-2 font-stretchpro underline underline-offset-4"
        >
          Felipe Cepluki
        </a>
      </div>
    </div>
  )
}