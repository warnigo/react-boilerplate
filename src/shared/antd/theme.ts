import { components } from "./components"
import { token } from "./token"

export const getTheme = (algorithm: any): any => ({
  token,
  components,
  algorithm,
})
