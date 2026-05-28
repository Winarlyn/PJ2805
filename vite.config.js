import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/PJ2805',
  plugins: [
    tailwindcss(),
  ],
})