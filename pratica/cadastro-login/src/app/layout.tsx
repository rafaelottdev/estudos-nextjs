import type { Metadata } from "next"

import "@/styles/globals.sass"

export const metadata: Metadata = {
  title: "Login e Cadastro",
  description: "Sistema de login e cadastro",
}

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
