import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    imagetools({
      defaultDirectives: (id) => {
        // Auto-convert jpg/png to WebP, cap at 1440px wide, quality 80
        if (/\.(jpe?g|png)$/i.test(id.pathname) && !id.searchParams.size) {
          return new URLSearchParams({
            format: 'webp',
            quality: '80',
            w: '1440',
            withoutEnlargement: '',
            rotate: '',
          })
        }
        return new URLSearchParams()
      },
    }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router'],
          ui: ['lucide-react', 'motion'],
        },
      },
    },
  },
})
