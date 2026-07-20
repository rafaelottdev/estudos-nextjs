"use client"

import Image from "next/image"
import Link from "next/link"
import Navitem, { navItemInterface } from "../Navitem/Navitem"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useTheme } from "next-themes"

import styles from "./Navbar.module.sass"

import { FaXmark } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle"

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
    const { theme, setTheme } = useTheme()

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/">
                    <Image src="logo.svg" alt="" width={50} height={50} />
                </Link>

                <ul>
                    {
                        items.map((item, index) => (
                            <Navitem key={index} url={item.url} label={item.label} isActive={pathname === item.url} />
                        ))
                    }
                </ul>

                {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    dark mode
                </button> */}

                <ThemeToggle />

                {/* <button onClick={() => setOpenMenu(!openMenu)}>{openMenu ? <FaXmark /> : <IoIosMenu />}</button> */}
            </nav>
        </header>
    )
}

export default Navbar

// className={`${openMenu ? `${styles.open}` : ""}`}
