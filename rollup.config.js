/* jshint node:true, esnext:true */
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'index.js',
  // external: ['jquery'],
  globals: {
    jquery: '$'
  },
  plugins: [
    nodeResolve()
  ],
  targets: [{
    format: 'iife',
    dest: 'bundle.js'
  }]
};
