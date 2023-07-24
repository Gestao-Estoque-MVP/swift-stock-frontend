import "./globals.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Swift Stock',
  description: "Gerencie seus estoques de maneira fácil e funcional",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="font-default-font">{children}</body>
    </html>
  )
}
