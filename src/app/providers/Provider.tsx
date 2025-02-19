import { type FCRC } from "@shared/types"

import { AntdProvider } from "./AntdProvider"
import { QueryProvider } from "./QueryProvider"

export const Provider: FCRC = ({ children }) => (
  <AntdProvider>
    <QueryProvider>{children}</QueryProvider>
  </AntdProvider>
)
