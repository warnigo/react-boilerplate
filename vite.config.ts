import { reactRouter } from "@react-router/dev/vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [TanStackRouterVite({ autoCodeSplitting: true }), reactRouter()],
  clearScreen: false,

  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@pages": resolve(__dirname, "src/pages"),
      "@shared": resolve(__dirname, "src/shared"),
      "@helpers": resolve(__dirname, "src/helpers"),
      "@entities": resolve(__dirname, "src/entities"),
      "@store": resolve(__dirname, "src/store"),
      "@features": resolve(__dirname, "src/features"),
      "@widgets": resolve(__dirname, "src/widgets"),
    },
  },
})
