import { useThemeStore } from "@store/theme"
import { ConfigProvider, theme } from "antd"
import en from "antd/locale/en_US"

import { getTheme } from "@shared/antd"
import { type FCRC } from "@shared/types"

export const AntdProvider: FCRC = ({ children }) => {
  const { isDarkMode } = useThemeStore()

  const themeConfig = getTheme(
    isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
  )

  return (
    <ConfigProvider locale={en} theme={themeConfig}>
      {children}
    </ConfigProvider>
  )
}
