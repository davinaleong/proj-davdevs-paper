import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PaperReact',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'esm.js' : 'js'}`
    },
    rollupOptions: {
      external: [
        'react', 
        'react-dom', 
        '@davdevs/paper-foundations', 
        '@davdevs/paper-core',
        '@davdevs/paper-basic',
        '@davdevs/paper-premium'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@davdevs/paper-foundations': 'PaperFoundations',
          '@davdevs/paper-core': 'PaperCore',
          '@davdevs/paper-basic': 'PaperBasic',
          '@davdevs/paper-premium': 'PaperPremium'
        }
      }
    },
    sourcemap: true
  }
})