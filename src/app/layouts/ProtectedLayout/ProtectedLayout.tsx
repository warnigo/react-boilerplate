import { Layout } from "antd"
import { Content } from "antd/es/layout/layout"

import { type FCRC } from "@shared/types"
import { Header } from "@widgets/Header"

export const ProtectedLayout: FCRC = ({ children }) => (
  <Layout>
    <Header />

    <Content>{children}</Content>
  </Layout>
)
