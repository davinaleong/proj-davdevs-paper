import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@davdevs/paper-foundations': path.resolve(__dirname, '../foundations/src')
    }
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true
  }
});