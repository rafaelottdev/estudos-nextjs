import Link from "next/link"

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav>
                <Link href="/dashboard/dolar">em dolar</Link> <br/>

                <Link href="/dashboard/real">em real</Link>
            </nav>

            <div>{children}</div>
        </>
    )
}

export default Layout
