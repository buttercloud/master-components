const esbuild = require('esbuild');

const results = esbuild.buildSync({
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
});

console.log(results);
