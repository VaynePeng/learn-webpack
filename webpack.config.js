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
    rules: [
      {
        test: /\.css$/i, // 正则匹配
        // loader: 'css-loader', // loader 选项只能使用一个 loader 一般不建议使用，使用 use 就好
        use: [
          'style-loader', // 通过使用多个 style 标签自动把 styles 插入到 DOM 中
          'css-loader' // 将 js 中的 css 通过使用多个 style 标签自动把 styles 插入到 DOM 中
        ] // 匹配到的文件会使用这些 loader 从后往前加载
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader' // 将 less 编译为 css
        ]
      },
      {
        test: /\.(png|jpg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024 // 小于 50kb 会转化为 base64
          }
        }
      }
    ]
  },
  plugins: []
}
