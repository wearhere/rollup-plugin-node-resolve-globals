/* jshint node:true, esnext:true */
import nodeResolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  external: ['handlebars/runtime'],
  globals: {
    'handlebars/runtime': 'Handlebars'
  },
  plugins: [
    nodeResolve(),
    commonJS({
      include: 'node_modules/**',
    })
  ],
  targets: [{
    format: 'iife',
    dest: 'bundle.js'
  }]
};
