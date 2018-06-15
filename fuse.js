const { FuseBox } = require('fuse-box');
const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/bundle.js',
  target: 'browser@es6',
  _useTypescriptCompiler: true,
  _allowSyntheticDefaultImports: true,
  log: {
    showBundledFiles: true
  },
  package: {
    name: 'fc-npm-tester',
    main: 'src/renderer.js'
  }
});
fuse.bundle('app.js').instructions('> renderer.js');
fuse.run();