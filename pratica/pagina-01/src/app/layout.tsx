import type { Metadata } from "next"

import Navbar from "@/components/Navbar/Navbar"

import "@/styles/globals.sass"

export const metadata: Metadata = {
  title: "Pratica nextjs",
  description: "Treinando next",
}

export default function RootLayout({ children, auth }: Readonly<{children: React.ReactNode, auth: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        {auth} {/* APARECE EM TODOS PORQUE TA NO LAYOUT ROOT  */}
      </body>
    </html>
  )
}
