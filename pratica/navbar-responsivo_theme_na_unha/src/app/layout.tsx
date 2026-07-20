import type { Metadata } from "next";

import Navbar from "@/components/Navbar/Navbar";

import "@/styles/globals.sass"

const themeScript = `
  (function() {
    try {
      const stored = localStorage.getItem("theme")
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const theme = stored || (systemDark ? 'dark' : 'light')
      document.documentElement.setAttribute('data-theme', theme)
      document.documentElement.style.colorScheme = theme
    } catch (e) {}
  })()
`

export const metadata: Metadata = {
  title: "Navbar Responsivo",
  description: "Praticando nextjs fazendo um navbar responsivo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
          <Navbar />

          {children}
      </body>
    </html>
  )
}
