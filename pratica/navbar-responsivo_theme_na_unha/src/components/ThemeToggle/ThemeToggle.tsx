"use client"

import { useEffect, useState } from "react"

export function ThemeToggle() {
    const [theme, setThemeState] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const current = document.documentElement.getAttribute("data-theme")
        if(current === 'dark' || current === 'light') {
            setThemeState(current)
        }
    }, [])

    function toggleTheme() {
        const next = theme === 'dark' ? 'light' : 'dark'
        
        document.documentElement.setAttribute('data-theme', next)
        document.documentElement.style.colorScheme = next
        localStorage.setItem('theme', next)

        setThemeState(next)
    }

    return (
        <button onClick={toggleTheme}>
            {theme == 'dark' ? '☀️ Claro' : '🌙 Escuro'}
        </button>
    )
}