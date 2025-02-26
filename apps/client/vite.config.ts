import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@spread_plan/ui": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: ["@spread_plan/ui"],
  },
});
