import Link from "next/link"

function LoginPage() {
    async function getLogin(formData: FormData) {
        "use server"

        const currentEmail = formData.get("email")
        const currentPassword = formData.get("password")

        const data = await fetch("http://localhost:3000/api/users")
        const userData = await data.json()
    }

    return (
        <section className="w-screen h-screen flex flex-col justify-center items-center bg-zinc-950">
            <h1 className="text-white mb-3 text-3xl tracking-wider">LOGIN</h1>

            <form action={getLogin} className="w-100 h-60 px-10 flex flex-col justify-center gap-4 bg-slate-900 rounded-lg">
                <div className="flex flex-col gap-2">
                    <label htmlFor="emailField" className="text-white">Email</label>
                    <input type="email" name="email" id="emailField" className="h-8 pl-2 bg-white rounded-md" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="passwordField" className="text-white">Senha</label>
                    <input type="password" name="password" id="passwordField" className="h-8 pl-2 bg-white rounded-md" />
                </div>

                <div className="flex justify-between items-center mt-2">
                    <button type="submit" className="h-8 px-5 text-black bg-white rounded-lg cursor-pointer">Entrar</button>

                    <Link href="/signup" className="text-white underline">Se-cadastrar</Link>
                </div>
            </form>
        </section>
    )
}

export default LoginPage
