import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: ["idowuportfolio.com"],
  },
  preview: {
    host: "0.0.0.0",
    port: 5000,
  },
  build: {
    minify: "esbuild",
    sourcemap: false,
  },
});
