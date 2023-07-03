export const metadata = {
  title: 'Contato | Felipe Cepluki',
  description: 'Bem-vindo ao meu site pessoal 👨‍💻',
}

export default function Contact() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <form className="flex flex-col w-full h-full items-center justify-center">
        <input type="text" placeholder="Seu nome Completo" className="bg-transparent placeholder:text-zinc-400 text-white w-1/3 border-b-2 border-b-white" />
        <input type="email" placeholder="Seu melhor e-mail" className="bg-transparent placeholder:text-zinc-400 text-white w-1/3 border-b-2 border-b-white mt-10" />
        <textarea placeholder="Sua mensagem aqui" className="resize-none bg-transparent placeholder:text-zinc-400 text-white w-1/3 border-b-2 border-b-white mt-10"  />
        <input type="submit" value="Enviar" className="mt-10 bg-white text-purpledark w-1/3 h-10 rounded-xl cursor-pointer" />
      </form>
    </main>
  )
}