import autoprefixer from 'autoprefixer';
// import browserslist from 'browserslist';
import cssnanoPlugin from 'cssnano';
// import { browserslistToTargets } from 'lightningcss';
import { defineConfig} from 'vite';
import hmplPlugin from 'vite-plugin-hmpl';

export default defineConfig({
  base: './',
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import', 'mixed-decls', 'color-functions', 'global-builtin'],
      },
    },
    transformer: 'lightningcss',
    postcss: {
      plugins: [
        cssnanoPlugin({
          preset: 'default',
        }),
        autoprefixer(),
      ],
    },
  },
  plugins: [
    hmplPlugin({
      memo: true,
      sanitize: true,
    }),
  ],
});
