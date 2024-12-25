import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@root': '/jellyBelly-homework18',
      lodash: 'lodash',
    }
  },
  build: {
    outDir: 'dist/',
  },
  base: '/jellyBelly-homework18'
})
