import { defineConfig } from 'astro/config';
import postcssMergeQueries from "postcss-merge-queries";
import relativeLinks from 'astro-relative-links';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
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
    build: {

      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames: assetInfo => {
            let extType = assetInfo.name.split('.')[1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img';
            } else if (/woff|woff2/.test(extType)) {
              extType = 'css';
            }
            return `assets/${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js'
        }
      }
    },

  },
  integrations: [relativeLinks(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap({
    lastmod: new Date(),
  }),],
  server: {
    host: "192.168.30.28",
    port: 8080,
    open: true,
  },
  site: 'https://〇〇.jp'
});
