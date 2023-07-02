import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import 'remixicon/fonts/remixicon.css'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Felipe Cepluki',
  description: 'Bem-vindo ao meu site pessoal 👨‍💻',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={inter.className}>
      <body className="bg-purpledark">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
      <nav className="w-full flex">
        <Navbar />
      </nav>
        <main>{children}</main>
        <footer className="flex items-center justify-center pb-2">
        <Footer />
      </footer>
      </body>
    </html>
  )
}
