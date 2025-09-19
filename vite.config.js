// Plugins
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({ 
      template: { transformAssetUrls }
    }),
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    basicSsl()
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      "/api": {
        //target: "https://www.ddfj0.cn/bz",

        target: "http://localhost:8300",
        //rewrite:(path) => path.replace(/^\/api/, ""),

        changeOrigin: true,
      }
    },
    https: true
  },
  build: {
    minify: 'terser',
    terserOptions: {
    }
  },

})
