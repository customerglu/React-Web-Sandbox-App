import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";
  
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    server: {
      host: '0.0.0.0',  // To make it accessible on the local network
      port: 5173,
    },
  });
  