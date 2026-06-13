import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    port: 5000,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      input: {
        main:     path.resolve(import.meta.dirname, "index.html"),
        services: path.resolve(import.meta.dirname, "services.html"),
        work:     path.resolve(import.meta.dirname, "work.html"),
        about:    path.resolve(import.meta.dirname, "about.html"),
        contact:  path.resolve(import.meta.dirname, "contact.html"),
      },
    },
  },
});
