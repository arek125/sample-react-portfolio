import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import sass from 'sass'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': fileURLToPath(new URL('./node_modules/bootstrap', import.meta.url)),
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       implementation: sass,
  //     }
  //   }
  // }
})
