import zipPack from 'vite-plugin-zip-pack'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    zipPack({
      inDir: 'dist/_',
      outDir: 'dist',
      outFileName: 'ui-bundle.zip',
    }),
  ],
  server: {
    host: true,
  },
  build: {
    assetsInlineLimit: 0,
  },
}
