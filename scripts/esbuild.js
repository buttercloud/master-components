const esbuild = require('esbuild');
const svgrPlugin = require('esbuild-plugin-svgr');

// const results = esbuild.buildSync({
esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  // sourcemap: true,
  // minify: true,
  // splitting: true,
  // format: 'esm',
  platform: 'node',
  target: ['node10.4'],
  outdir: 'dist',
  external: ['react'],
  plugins: [
    svgrPlugin(),
  ],
});

// console.log(results);
