import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  server: { open: true },
  esbuild: {
    loader: 'jsx' // Single string instead of object
  }
});