import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteStaticCopy({
      targets: [
        // {
        //   src: './CNAME',
        //   dest: './',
        // },
        {
          src: './src/assets/fonts',
          dest: './assets',
        },
      ],
    }),
  ],
  base: '/gh-pages-demo/',
});
