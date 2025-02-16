import { create } from "zustand"
import { persist } from "zustand/middleware"

// Theme mode types
export type ThemeMode = "dark" | "light" | "system"

// Theme store interface
type ThemeStore = {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  isDarkMode: boolean
  setIsDarkMode: (isDark: boolean) => void
}

// Create theme store with persistence
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: "system",
      isDarkMode: false,

      setMode: (mode) => set({ mode }),
      setIsDarkMode: (isDarkMode) => set({ isDarkMode }),
    }),
    {
      name: "theme-storage",
      partialize: (state) => ({ mode: state.mode }),
    },
  ),
)
