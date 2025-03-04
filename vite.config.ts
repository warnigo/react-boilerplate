import { reactRouter } from "@react-router/dev/vite"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import { resolve } from "path"
import { defineConfig } from "vite"
import mkcert from "vite-plugin-mkcert"
import tsPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    reactRouter(),
    mkcert({
      source: "coding",
    }),
    tsPaths(),
  ],
  clearScreen: false,

  server: {
    https: {},
    port: 5173,
  },

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

  build: {
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
})
