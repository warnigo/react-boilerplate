import { type FCRequiredChildren } from "@shared/types"

import { AntdProvider } from "./AntdProvider"
import { QueryProvider } from "./QueryProvider"

export const Provider: FCRequiredChildren = ({ children }) => (
  <AntdProvider>
    <QueryProvider>{children}</QueryProvider>
  </AntdProvider>
)
