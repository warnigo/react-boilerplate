import classNames from "classnames/bind"

import { type FCRC } from "@shared/types"

import styles from "./PublicLayout.module.scss"

const cn = classNames.bind(styles)

export const PublicLayout: FCRC = ({ children }) => (
  <div className={cn("layout")}>{children}</div>
)

PublicLayout.displayName = "PublicLayout"
