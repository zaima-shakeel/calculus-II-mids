import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api/cpp': {
        target: 'https://godbolt.org',
        changeOrigin: true,
        rewrite: () => '/api/compiler/g132/compile',
      },
    },
  },
})
