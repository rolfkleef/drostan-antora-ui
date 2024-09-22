import copy from 'rollup-plugin-copy'
import zip from 'vite-plugin-zip-pack'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    zip({
      inDir: 'dist/',
      outDir: 'dist/',
      outFileName: 'ui-bundle.zip',
    }),
  ],
  server: {
    host: true,
  },
  base: './',
  build: {
    minify: false,
    assetsInlineLimit: 0,
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            // Copy the handlebars templates and helpers to the dist folder
            { src: 'src/layouts', dest: './dist' },
            { src: 'src/partials', dest: 'dist' } ,
            { src: 'src/helpers', dest: 'dist' },
          ],
          hook: 'writeBundle',
        }),
      ],
      output: {
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop(); // Get the file extension

          switch (extType) {
            case 'css':
              return 'css/[name].[ext]';  // Place CSS files in the css/ folder
            case 'woff':
            case 'woff2':
            case 'ttf':
            case 'otf':
            case 'eot':
              return 'fonts/[name].[ext]';  // Place font files in the fonts/ folder
            case 'png':
            case 'jpg':
            case 'jpeg':
            case 'gif':
            case 'svg':
              return 'images/[name].[ext]';  // Place image files in the images/ folder
            default:
              return 'assets/[name].[ext]';  // Default case for other assets
          }
        },
      }
    },
  },
}
