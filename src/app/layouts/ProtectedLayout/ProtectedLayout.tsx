import { type FCRequiredChildren } from "@shared/types"

export const ProtectedLayout: FCRequiredChildren = ({ children }) => (
  <div>
    header
    {children}
  </div>
)
