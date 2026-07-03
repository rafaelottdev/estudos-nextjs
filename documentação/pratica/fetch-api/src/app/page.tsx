import { Suspense } from "react"
import Genres from "./Genres"
import GenreLoad from "./GenreLoad"

async function Home() {
  return (
    <div>
      <header style={{ display: "flex", gap: "5px", marginBottom: "30px" }}>
        <div>Home</div>
        <div>Contato</div>
        <div>Explorar</div>
        <div>Sobre</div>
        <div>Mais</div>
      </header>

      <Suspense fallback={<GenreLoad />}>
        <Genres />
      </Suspense>
    </div>
  )
}

export default Home
