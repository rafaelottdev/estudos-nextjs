"use client"

import Image from "next/image"
import Link from "next/link"
import Navitem, { navItemInterface } from "../Navitem/Navitem"
import { usePathname } from "next/navigation"
import { useState } from "react"

import styles from "./Navbar.module.sass"

import { FaXmark } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { ThemeToggle } from "../theme/ThemeToggle"

function Navbar() {
    const items: navItemInterface[] = [
        {
            url: "/",
            label: "Inicio"
        },

        {
            url: "/about",
            label: "Sobre"
        },

        {
            url: "/products",
            label: "Produtos"
        },

        {
            url: "/services",
            label: "Serviços"
        },

        {
            url: "/explore",
            label: "Explorar"
        },
    ]

    const pathname = usePathname()

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    return (
        <>
            <header className={`${styles.header} ${openMenu ? `${styles.show}` : ""}`}>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo_link}>
                        <Image src="logo.svg" alt="" width={50} height={50} />
                    </Link>

                    <ul className={styles.nav_list}>
                        {
                            items.map((item, index) => (
                                <Navitem key={index} url={item.url} label={item.label} isActive={pathname === item.url} />
                            ))
                        }
                    </ul>

                    <div>
                        <ThemeToggle />
                    </div>
                </nav>
            </header>

            <button className={styles.menu_btn} onClick={() => setOpenMenu(!openMenu)}>{openMenu ? <FaXmark /> : <IoIosMenu />}</button>
        </>
    )
}

export default Navbar
