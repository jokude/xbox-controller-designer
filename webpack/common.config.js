const path = require('path');
//const getAliases = require('./aliases');

const resolve = (location) => path.resolve(__dirname, location);

module.exports = {
  target: 'web',

  entry: {
    index: resolve('../src/app/index.js')
  },

  output: {
    path: resolve('../dist')
  },

  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.ts', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  }
};
