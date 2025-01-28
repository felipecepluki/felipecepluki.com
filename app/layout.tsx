import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import { Command } from "@/components/Command";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Felipe Cepluki",
  description: "Welcome to my website!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.className} antialiased`}
      >
        <div className="relative">
          {/* O componente Command para o atalho global */}
          <Command />

          {/* O conteúdo das páginas */}
          <div className="z-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
