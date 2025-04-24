import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      hooks: path.resolve(__dirname, './src/hooks/'),
      // helpers: path.resolve(__dirname, './src/helpers/'),
      components: path.resolve(__dirname, './src/components/'),
      // contexts: path.resolve(__dirname, './src/contexts/'),
      pages: path.resolve(__dirname, './src/pages/'),
      // assets: path.resolve(__dirname, './src/assets/'),
      // lib: path.resolve(__dirname, './src/lib/'),
    },
  },
});
