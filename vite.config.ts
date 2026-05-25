import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({ open: true, filename: 'bundle-analysis.html' })
  ],
  resolve: {
  alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  test: {
    environment: 'jsdom',
  },
  build: {
    rollupOptions: {
      output: {
        // [name] автоматически подставит имя исходного vue-файла
        chunkFileNames: 'assets/js/[name]-[hash].js',
        // Это правило применит такое же понятное имя для CSS-файлов чанка
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
