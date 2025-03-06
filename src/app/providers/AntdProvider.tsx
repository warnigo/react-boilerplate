import { type FC, type PropsWithChildren } from "react"

import { useThemeStore } from "@store/theme"
import { ConfigProvider, theme } from "antd"
import en from "antd/locale/en_US"

import { getTheme } from "@shared/antd"

export const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
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
