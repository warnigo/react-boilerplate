import { StrictMode } from "react"

import { createRoot } from "react-dom/client"

import App from "./App"

import "./styles/globals.css"

const ROOT = document.getElementById("root")!
createRoot(ROOT).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
