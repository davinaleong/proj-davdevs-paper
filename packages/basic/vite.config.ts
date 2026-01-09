import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PaperBasic',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'esm.js' : 'js'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@davdevs/paper-foundations', '@davdevs/paper-core', 'lucide-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@davdevs/paper-foundations': 'PaperFoundations',
          '@davdevs/paper-core': 'PaperCore',
          'lucide-react': 'LucideReact'
        }
      }
    },
    sourcemap: true
  }
})