import { type FC, type PropsWithChildren } from "react"

import { AntdProvider } from "./AntdProvider"
import { QueryProvider } from "./QueryProvider"

// Global provider component that composes and applies all app-wide context providers
export const Provider: FC<PropsWithChildren> = ({ children }) => (
  <AntdProvider>
    <QueryProvider>{children}</QueryProvider>
  </AntdProvider>
)
