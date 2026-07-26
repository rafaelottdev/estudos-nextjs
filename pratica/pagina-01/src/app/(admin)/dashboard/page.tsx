import Link from "next/link"

function Page() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/dashboard/porcentage">Porcentagem</Link>
                </li>

                <li>
                    <Link href="/dashboard/general">Geral</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Page
