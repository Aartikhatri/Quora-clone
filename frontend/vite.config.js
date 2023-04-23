import { defineConfig } from 'vite'
import { fileURLToPath } from 'url';
import path ,  {dirname} from 'path'

import react from '@vitejs/plugin-react'
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
