import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import handlebars from "vite-plugin-handlebars";
import path from 'path';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    handlebars({
      partialDirectory: path.resolve(__dirname, 'templates'),
    }),
  ],
})
