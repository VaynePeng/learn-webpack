const path = require('path')

module.exports = {
  mode: 'development',
  // 多入口
  entry: {
    xxx: '../src/xxx.js',
    main: '../src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js', // 和入口文件名保持一致
    clean: true
  }
}
