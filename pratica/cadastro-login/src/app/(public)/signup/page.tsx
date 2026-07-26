import { sendUser } from "@/actions/sendUser"
import Link from "next/link"

function SignupPage() {
    async function getUser(formData: FormData) {
        "use server"

        const userName = formData.get("name") as string
        const userEmail = formData.get("email") as string
        const userPassword = formData.get("password") as string

        await sendUser({ userName, userEmail, userPassword })
    }

    return (
        <section className="w-screen h-screen flex flex-col justify-center items-center bg-zinc-950">
            <h1 className="text-white mb-3 text-3xl tracking-wider">SE-CADASTRAR</h1>

            <form action={getUser} className="w-100 h-80 px-10 flex flex-col justify-center gap-4 bg-slate-900 rounded-lg">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nameField" className="text-white">Nome</label>
                    <input type="text" name="name" id="nameField" className="h-8 pl-2 bg-white rounded-md" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="emailField" className="text-white">Email</label>
                    <input type="email" name="email" id="emailField" className="h-8 pl-2 bg-white rounded-md" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="passwordField" className="text-white">Senha</label>
                    <input type="password" name="password" id="passwordField" className="h-8 pl-2 bg-white rounded-md" />
                </div>

                <div className="flex justify-between items-center mt-2">
                    <button type="submit" className="h-8 px-3 text-black bg-white rounded-lg cursor-pointer">Se-Cadastrar</button>

                    <Link href="/login" className="text-white underline">Login</Link>
                </div>
            </form>
        </section>
    )
}

export default SignupPage
