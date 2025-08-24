// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// *** 1. เปลี่ยน import เป็น static adapter ***
import vercel from '@astrojs/vercel/static'; 
import Pwa from '@vite-pwa/astro';

export default defineConfig({
  // *** 2. ลบบรรทัด 'output: "server"' ออกไป ***
  // Astro จะกลับไปใช้ค่าเริ่มต้นคือ 'static'
  
  // *** 3. เรียกใช้ static adapter ***
  adapter: vercel({
    // สำหรับ static adapter, imageService จะช่วยทำ Image Optimization ให้
    imageService: true, 
  }),

  integrations: [
    mdx(),
    Pwa({
      // *** 4. เราไม่ต้องการ disable แล้วในโหมด static ***
      // disable: process.env.VERCEL === '1', // ลบหรือคอมเมนต์บรรทัดนี้ออก
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
        globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webmanifest}'], // เพิ่ม webmanifest เข้าไป
        runtimeCaching: [
          // runtimeCaching config เหมือนเดิม
          {
            urlPattern: ({ url }) => { // ปรับปรุงให้ cache หน้า HTML ทั้งหมด
              return url.pathname.endsWith('/') || url.pathname.endsWith('.html');
            },
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