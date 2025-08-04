import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// We must use these below code for working with TailwindCSS
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    plugins: [react(), tailwindcss()],
})
