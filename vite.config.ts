
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// CHANGE THIS to your repo name if your GitHub Pages is at
// https://username.github.io/repo-name/
// Example: base: "/repo-name/"
const base = process.env.NODE_ENV === 'production' ? "/YOUR-REPO-NAME/" : "/";

export default defineConfig(({ mode }) => ({
  base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
