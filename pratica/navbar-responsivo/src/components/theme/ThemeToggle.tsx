"use client"

import styles from "./ThemeToggle.module.sass"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => setMounted(true), [])
    if(!mounted) return null

    return (
        <button className={styles.theme_button} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <CiLight /> : <CiDark />}
        </button>
    )
}