import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [react()],
    build: { 
      outDir: env.VITE_BUILD_PATH,
      // increased limit to 1000Kb
      // chunkSizeWarningLimit: 1000, 
    }
  }
})
