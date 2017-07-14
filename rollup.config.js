/* jshint node:true, esnext:true */
import nodeResolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  external: ['handlebars/runtime'],
  plugins: [
    nodeResolve({
      skip: ['handlebars']
    }),
    commonJS(),
  ],
  targets: [{
    format: 'iife',
    dest: 'bundle.js'
  }]
};