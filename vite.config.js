import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false
                },
            }
        }),
        VitePWA({
            registerType: 'autoUpdate',
            outDir: 'public',
            buildBase: '/',
            scope: '/',
            manifest: {
              "name": "PWA - Laravel",
              "short_name": "pwa",
              "theme_color": "#F5F6F7",
              "background_color": "#F5F6F7",
              "display": "standalone",
              "scope": "/",
              "start_url": "/",
              "icons": [
                {
                  "src": "/assets/icons/icon-ios.png",
                  "sizes": "180x180",
                  "type": "image/png"
                },
                {
                  "src": "/assets/icons/icon-192x192.png",
                  "sizes": "192x192",
                  "type": "image/png"
                },
                {
                  "src": "/assets/icons/icon-384x384.png",
                  "sizes": "384x384",
                  "type": "image/png"
                },
                {
                  "src": "/assets/icons/icon-512x512.png",
                  "sizes": "512x512",
                  "type": "image/png",
                  "purpose": "maskable"
                },
                {
                  "src": "/assets/icons/icon-1024x1024.png",
                  "sizes": "1024x1024",
                  "type": "image/png"
                }
              ]
            }
          })
    ],
});
