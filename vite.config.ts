import { defineConfig } from 'vite'
import path, { join } from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), 'node_modules/$1'),
      },
    ]
  }
  // resolve: {
  //   // alias: [
  //   //   { find: '@', replacement: path.resolve(__dirname, '/src/') },
  //   // ],
  //   // alias: [
  //   //   { find: 'components/', replacement: path.resolve(__dirname, '/src/components/') },
  //   //   { find: 'screens/', replacement: path.resolve(__dirname, '/src/components/') },
  //   //   { find: 'styles/', replacement: path.resolve(__dirname, '/src/components/') },
  //   // ],
  // },
})
