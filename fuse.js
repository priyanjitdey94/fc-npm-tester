const { FuseBox } = require('fuse-box');

const fuse = FuseBox.init({
  _homeDir: './',
  output: './dist/',
  target: 'browser@es6',
  _useTypescriptCompiler: true,
  allowSyntheticDefaultImports: true,
  log: {
    showBundledFiles: true
  }
});

fuse.bundle('./dist/bundle.js').instructions('> ./src/renderer.js');
fuse.run();