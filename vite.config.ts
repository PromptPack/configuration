import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./extension/manifest.json";
export default defineConfig({
  root: "extension",
  plugins: [react(), crx({ manifest: (manifest as any) })],
  publicDir: false,
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: false
  }
});
