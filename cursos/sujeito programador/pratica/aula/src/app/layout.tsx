import Header from "@/components/header";
import "./globals.css";

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aula NextJs do zero",
  description: "aprendendo nextjs do zero com sujeito programador",
  openGraph: {
    title: "aprendendo nextjs no youtube",
    description: "aprendendo do zero o nextjs"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {index: true, follow: true}
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased`}>
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
