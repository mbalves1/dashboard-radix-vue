// vitest.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    imports: {
      'store/**': './store/**',
      'components/**': './components/**',
    }
  },
});