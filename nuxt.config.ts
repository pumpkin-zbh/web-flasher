// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';
import nodePolyfills from 'vite-plugin-node-stdlib-browser';

export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  app: {
    // baseURL: '/web-flasher/',
    buildAssetsDir: 'assets',
  },

  ssr: false,
  css: ['~/assets/css/main.css'],

  modules: [
    '@pinia/nuxt',
    '@vite-pwa/nuxt'
  ],

  pwa: {
    /* PWA options */
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      baseURL: 'web-flasher'
    }
  },
  vite: {
    plugins: [
      nodePolyfills(),
    ],
    server: {
      proxy: {
        "^/api/.*": {
          target:
            "https://api.meshtastic.org/",
          changeOrigin: true,
          followRedirects: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          secure: false,
          headers: {
            Accept: "application/octet-stream",
            Origin: 'https://flash.meshtastic.org',
            Referer: 'https://flash.meshtastic.org/'
          },
        }
      }
    }
  },

  compatibilityDate: '2024-07-18',
});