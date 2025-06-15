
/**
 * Script: postbuild.cjs
 * Purpose: After `vite build`, copy dist/index.html to dist/404.html
 */
const fs = require('fs');
const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const from = path.join(dist, 'index.html');
const to = path.join(dist, '404.html');

if (fs.existsSync(from)) {
  fs.copyFileSync(from, to);
  console.log("Copied index.html to 404.html for GitHub Pages SPA fallback.");
} else {
  console.warn("index.html not found. Did you run `vite build`?");
}
