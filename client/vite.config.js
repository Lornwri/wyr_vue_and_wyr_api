import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      //requests to the port: 5173 api will be sent to wyr app on port: 3000
      '/wyr': 'http://localhost:3000/'
    }
  }
})
