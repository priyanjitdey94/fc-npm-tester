import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
// import babel from 'rollup-plugin-babel';
// import uglify from 'rollup-plugin-uglify';

process.env.NODE_ENV = 'production';
export default {
  input: 'src/renderer.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  // experimentalDynamicImport: true,
  // experimentalCodeSplitting: true,
  plugins: [
    json(),
    resolve(),
    commonjs(),
    // babel(),
    // uglify()
  ]
};