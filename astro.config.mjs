import { defineConfig } from 'astro/config';
import postcssMergeQueries from "postcss-merge-queries";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap({
    lastmod: new Date(),
  })],

  vite: {
    css: {
      postcss: {
        plugins: [postcssMergeQueries]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/assets/styles/variables.scss";`
        }
      }
    },
  },
  server: {
    host: "192.168.30.28",
    port: 8080,
    open: true,
  },
  site: 'https://〇〇.jp'
});