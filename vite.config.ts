import { defineConfig } from "vite";
import { config } from "dotenv";
import react from "@vitejs/plugin-react";

config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/films-search",

  define: {
    "process.env": process.env
  }
});
