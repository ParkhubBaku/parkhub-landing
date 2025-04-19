import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-i18n': ['react-i18next', 'i18next'],
          'vendor-motion': ['framer-motion'],
          'components-header': ['./src/components/Header.tsx'],
          'components-hero': ['./src/components/Hero.tsx'],
          'components-about': ['./src/components/About.tsx'],
          'components-features': ['./src/components/Features.tsx'],
          'components-howitworks': ['./src/components/HowItWorks.tsx'],
          'components-plans': ['./src/components/Plans.tsx'],
          'components-team': ['./src/components/Team.tsx'],
          'components-testimonials': ['./src/components/Testimonials.tsx'],
          'components-contact': ['./src/components/Contact.tsx'],
          'components-cta': ['./src/components/CTA.tsx'],
          'components-faq': ['./src/components/FAQ.tsx'],
          'components-footer': ['./src/components/Footer.tsx'],
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
});