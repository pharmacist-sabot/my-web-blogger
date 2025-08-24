// astro.config.mjs
import { defineConfig } from 'astro/config';

// Astro Integrations
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless'; // แนะนำให้ระบุประเภท deploy เป็น /serverless หรือ /static
import Pwa from '@vite-pwa/astro';

export default defineConfig({
  // ตั้งค่า output เป็น 'server' หรือ 'hybrid' เพื่อให้ทำงานร่วมกับ Vercel adapter ได้ดีที่สุด
  output: 'server',
  
  adapter: vercel({
    // สามารถเพิ่ม options ของ vercel ได้ที่นี่ เช่น imageService: true
  }),

  integrations: [
    mdx(),
    Pwa({
      registerType: 'autoUpdate',
      manifest: {
        name: 'RxBlog',
        short_name: 'RxBlog',
        description: 'A personal blog about programming and technology.',
        theme_color: '#7c3aed',     // สีหลักของแอป (ควรตรงกับ global.css)
        background_color: '#f3f4f6', // สีพื้นหลังตอนแอปโหลด (Light mode)
        display: "standalone",      // ทำให้แอปเปิดแบบไม่มี UI ของเบราว์เซอร์
        start_url: "/",             // หน้าแรกเมื่อเปิดจากไอคอน
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable', // ไอคอนที่ปรับขนาดให้เข้ากับรูปร่างของ OS ได้
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif}'], // ไม่ต้อง cache .html เพราะเราจะ cache ด้วย runtime
        runtimeCaching: [
          {
            // Cache หน้าเว็บ HTML (Documents)
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'pages-cache',
              expiration: {
                maxEntries: 50, // เก็บได้สูงสุด 50 หน้า
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 วัน
              },
            },
          },
          {
            // Cache รูปภาพ
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100, // เก็บรูปได้สูงสุด 100 รูป
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 วัน
              },
            },
          },
          {
            // Cache ไฟล์ Font (ถ้ามี)
            urlPattern: ({ request }) => request.destination === 'font',
            handler: 'CacheFirst',
            options: {
              cacheName: 'fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 ปี
              },
            },
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