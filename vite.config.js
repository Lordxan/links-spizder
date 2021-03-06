import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import manifestTransformPlugin from './plugins/manifestTransformPlugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), manifestTransformPlugin()],
  build: {
    assetsInlineLimit: Math.pow(1024, 2),
    minify: 'terser',
    rollupOptions: {
      input: {
        content: 'src/main.js',
      },
      output: {
        format: 'umd',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      }
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  }
})
