import { useThemeStore } from "@store/theme"
import { ConfigProvider, theme } from "antd"
import en from "antd/locale/en_US"

import { getTheme } from "@shared/antd"
import { type FCRC } from "@shared/types"

export const AntdProvider: FCRC = ({ children }) => {
  const { isDarkMode } = useThemeStore()

  // useEffect(() => {
  //   const checkSystemTheme = () => {
  //     const systemDark = window.matchMedia(
  //       "(prefers-color-scheme: dark)",
  //     ).matches
  //     if (mode === "system") {
  //       setIsDarkMode(systemDark)
  //     }
  //   }

  //   checkSystemTheme()

  //   if (mode === "dark") {
  //     setIsDarkMode(true)
  //   } else if (mode === "light") {
  //     setIsDarkMode(false)
  //   }

  //   const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  //   mediaQuery.addEventListener("change", checkSystemTheme)

  //   return () => mediaQuery.removeEventListener("change", checkSystemTheme)
  // }, [mode, setIsDarkMode])

  const themeConfig = getTheme(
    isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
  )

  return (
    <ConfigProvider locale={en} theme={themeConfig}>
      {children}
    </ConfigProvider>
  )
}
