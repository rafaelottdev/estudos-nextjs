import Link from "next/link"

async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return (
        <div>
            <Link href="/login">Ir para login</Link>

            <div>Registro</div>
        </div>
    )
}

export default Page
