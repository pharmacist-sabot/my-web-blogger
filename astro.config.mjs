// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// 1. ตรวจสอบว่า import มาจาก '.../serverless' ถูกต้อง
import vercel from '@astrojs/vercel/serverless'; 
import Pwa from '@vite-pwa/astro';

export default defineConfig({
  // 2. กำหนด output เป็น 'server' ให้ตรงกับ adapter
  output: 'server', 
  
  // 3. เรียกใช้ adapter
  adapter: vercel({
    // (Optional) เปิดใช้ image optimization ของ Vercel
    imageService: true,
  }),

  integrations: [
    mdx(),
    Pwa({
      // 4. ยังคงใช้ disable: process.env.VERCEL === '1' ไว้ก่อน
      // เพื่อความปลอดภัย ป้องกันปัญหาซ้ำซ้อน
      disable: process.env.VERCEL === '1',
      registerType: 'autoUpdate',
      manifest: {
        name: 'RxBlog',
        short_name: 'RxBlog',
        description: 'A personal blog about programming and technology.',
        theme_color: '#7c3aed',
        background_color: '#f3f4f6',
        display: "standalone",
        start_url: "/",
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif}'],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'pages-cache', expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 } },
          },
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: { cacheName: 'images-cache', expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 } },
          },
          {
            urlPattern: ({ request }) => request.destination === 'font',
            handler: 'CacheFirst',
            options: { cacheName: 'fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } },
          },
        ],
      },
    }),
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});