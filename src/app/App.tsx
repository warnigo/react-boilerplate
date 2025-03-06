import { type FC } from "react"

import { RouterProvider } from "react-router-dom"

import { Provider } from "@app/providers"
import { routes } from "@app/routes"

export const App: FC = () => (
  <Provider>
    <RouterProvider router={routes} />
  </Provider>
)

App.displayName = "App"
