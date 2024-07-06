import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      assets: "/src/assets",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("react-select")) {
            return "@react-select";
          }
          if (id.includes("react-datepicker")) {
            return "@react-datepicker";
          }
          if (
            id.includes("react-router-dom") ||
            id.includes("@remix-run") ||
            id.includes("react-router")
          ) {
            return "@react-router";
          }
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/_mixins.scss";',
      },
    },
  },
  esbuild: {
    supported: {
      "top-level-await": true,
    },
  },
  base: "/invoice_app/",
});
