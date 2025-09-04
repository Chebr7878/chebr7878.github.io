import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',

  server: {
    host: "::",
    port: 8080,
    // Включаем сжатие для development
    compress: true,
  },
  
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src" ),
    },
  },

  // Оптимизация для production
  build: {
    // Минификация и оптимизация
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Убираем console.log в production
        drop_debugger: true,
      },
    },
    
    // Разделение кода на чанки для лучшего кэширования
    rollupOptions: {
      output: {
        manualChunks: {
          // Отдельный чанк для React
          'react-vendor': ['react', 'react-dom'],
          // Отдельный чанк для UI компонентов
          'ui-components': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
        // Добавляем хеши к именам файлов для кэширования
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    
    // Оптимизация CSS
    cssCodeSplit: true,
    
    // Настройки для лучшего сжатия
    target: 'es2015',
    assetsInlineLimit: 4096, // Встраиваем маленькие файлы в JS
  },
}));