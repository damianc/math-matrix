const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'math-matrix.js',
    library: {
      name: 'Math.matrix',
      type: 'var',
      export: 'default'
    }
  },
  resolve: {
    alias: {
      '@assert': path.resolve(__dirname, 'src/assert'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  }
};

