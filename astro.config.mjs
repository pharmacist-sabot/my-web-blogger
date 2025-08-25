// astro.config.mjs
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

import icon from 'astro-icon';

export default defineConfig({
  markdown: {
    shikiConfig: {
      // เลือก Theme ที่คุณชอบ (เหมือนใน VS Code)
      theme: 'github-dark', 
      wrap: true,
    },
  },

  integrations: [mdx(), icon()],
  adapter: vercel(),
});