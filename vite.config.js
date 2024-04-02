import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  base: '/home-page/',
  plugins: [react()],
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, './src/assets/img/'),
      '@icons': path.resolve(__dirname, './src/components/icons/'),
      '@': path.resolve(__dirname, './src'),
    },
  },
})
