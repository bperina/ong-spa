import { defineConfig } from 'vite';

export default defineConfig({
  base: './',               // caminhos relativos (funciona no GitHub Pages)
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',      // minifica JS e CSS
    rollupOptions: {
      input: 'html/index.html',
    },
  },
});
