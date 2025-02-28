import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/detect-it/', // ✅ Ensure this matches your GitHub repo name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist', // ✅ Ensure the output directory is correct
    assetsDir: 'assets', // Optional: Keep assets organized
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
  