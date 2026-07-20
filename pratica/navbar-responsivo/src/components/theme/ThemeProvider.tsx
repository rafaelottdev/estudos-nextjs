"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { THEME_ATTRIBUTE, THEME_STORAGE_KEY } from "@/lib/theme"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider
            attribute={THEME_ATTRIBUTE}
            storageKey={THEME_STORAGE_KEY}
            defaultTheme="system"
            enableSystem
        >
            {children}
        </NextThemesProvider>
    )
}