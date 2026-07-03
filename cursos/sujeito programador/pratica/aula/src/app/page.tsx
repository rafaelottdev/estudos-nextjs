import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Aula NextJs do zero",
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

export default function Home() {
  return (
    <div>
      <h1>Pagina HOME</h1>
    </div>
  )
}