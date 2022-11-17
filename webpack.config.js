const { resolve } = require('path')

module.exports = {
  mode: 'development', // production
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    // loader
    rules: []
  },
  plugins: []
}
