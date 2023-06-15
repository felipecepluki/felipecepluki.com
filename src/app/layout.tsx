import './globals.css'
import { Inter } from 'next/font/google'
import 'remixicon/fonts/remixicon.css'

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
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
