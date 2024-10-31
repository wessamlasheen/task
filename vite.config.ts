import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/task/", // Match exactly with your repo name
  build: {
    outDir: "dist",
  },
});
