import Link from "next/link"

function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Link href="/about/about-enterprise">Sobre a EMPRESA</Link> <br />

            <Link href="/about/about-me">Sobre MIM</Link>

            <div>
                {children}
            </div>
        </>
    )
}

export default AboutLayout
