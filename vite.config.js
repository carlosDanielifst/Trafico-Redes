import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // La propiedad 'base' le indica a Vite dónde se encuentra la aplicación en GitHub Pages.
  // Es la URL de tu repositorio. Esto permite que el proceso de "build" encuentre todos los archivos correctamente.
  base: '/Trafico-Redes/',
  plugins: [react()],
})