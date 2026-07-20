export const THEME_ATTRIBUTE = "data-theme"
export const THEME_STORAGE_KEY = "theme"

export const THEMES = ["light", "dark", "system"] as const
export type Theme = (typeof THEMES)[number]