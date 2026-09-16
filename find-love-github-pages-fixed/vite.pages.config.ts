import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  base: process.env.VITE_BASE_PATH ? `${process.env.VITE_BASE_PATH}/` : '/',
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(new URL('.', import.meta.url).pathname) } },
  define: { 'process.env.NEXT_PUBLIC_BASE_PATH': JSON.stringify(process.env.VITE_BASE_PATH || '') },
  build: { outDir: 'pages-dist', emptyOutDir: true },
});
