import Link from "next/link"

import { SiNextdotjs } from "react-icons/si"
import { MdDarkMode } from "react-icons/md"
import { MdOutlineDarkMode } from "react-icons/md"

import styles from "./Navbar.module.sass"

function Navbar() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <SiNextdotjs />
            </Link>

            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li>
                        <Link href="/about">Sobre</Link>
                    </li>

                    <li>
                        <Link href="/products">Produtos</Link>
                    </li>

                    <li>
                        <Link href="/services">Serviços</Link>
                    </li>

                    <li>
                        <Link href="/explore">Explorar</Link>
                    </li>

                    <li>
                        <Link href="/contact">Contato</Link>
                    </li>
                </ul>
            </nav>

            <button className={styles.theme_button}>
                <MdOutlineDarkMode />
            </button>
        </header>
    )
}

export default Navbar
