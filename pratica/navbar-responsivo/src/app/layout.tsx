import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

import Navbar from "@/components/Navbar/Navbar";

import "@/styles/globals.sass"

export const metadata: Metadata = {
  title: "Navbar Responsivo",
  description: "Praticando nextjs fazendo um navbar responsivo",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <ThemeProvider>
            <Navbar />

            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
