/* jshint node:true, esnext:true */
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'index.js',
  globals: {
    $: '$'
  },
  plugins: [
    // Cases (uncomment code to see):

    // 1. no nodeResolve - works

    // 2. nodeResolve - fails even though it should work?
    // nodeResolve()

    // 3. nodeResolve with skip - works but should be unnecessary
    // nodeResolve({
    //   skip: ['$']
    // })
  ],
  targets: [{
    format: 'es',
    dest: 'bundle.js'
  }]
};
