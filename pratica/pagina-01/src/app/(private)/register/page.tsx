import LikeButton from "@/components/LikeButton/LikeButton"
import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"

async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    async function getInfo(formData: FormData) {
        "use server"

        const name = formData.get("name")
        const password = formData.get("senha")

        console.log(`${name} colocou a senha ${password}`)
    }

    return (
        <div>
            <Link href="/login">Ir para login</Link>

            <div>Registro</div>

            <form action={getInfo}>
                <input type="text" placeholder="Digite seu Nome" name="name" />

                <input type="password" placeholder="Digite sua senha" name="senha" />

                <button type="submit">Enviar</button>
            </form>

            <div>
                <h4>BOTÃO DE LIKES</h4>

                <LikeButton />
            </div>
        </div>
    )
}

export default Page
