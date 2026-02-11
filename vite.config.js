import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Helpdesk-UI/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']]
      },
    }),
    tailwindcss(),
  ],
})
