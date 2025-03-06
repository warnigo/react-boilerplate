import { type FC, type PropsWithChildren } from "react"

import { AntdProvider } from "./AntdProvider"
import { QueryProvider } from "./QueryProvider"

export const Provider: FC<PropsWithChildren> = ({ children }) => (
  <AntdProvider>
    <QueryProvider>{children}</QueryProvider>
  </AntdProvider>
)
