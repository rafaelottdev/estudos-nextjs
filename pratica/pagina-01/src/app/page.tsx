import Link from "next/link";
import { redirect } from "next/navigation";

const loged = true

export default async function Home() {
  if(!loged) {
    redirect("/login")
  }

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <>
    <Link href="/login">Ir para LOGIN</Link>
      <div>home</div>
    </>
  )
}
