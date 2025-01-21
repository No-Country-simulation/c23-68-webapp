import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/c23-68-webapp/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "./src/index.css";`,
      },
    },
  },
})
