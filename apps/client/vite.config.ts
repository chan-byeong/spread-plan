import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@spread_plan/ui": path.resolve(__dirname, "../../packages/ui/dist"),
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: ["@spread_plan/ui"],
  },
  build: {
    outDir: "build",
  },
});
