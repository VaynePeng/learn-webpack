const { resolve } = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // production
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    clean: true // 每次打包前都会清空之前的内容
  },
  module: {
    // loader
    rules: [
      {
        test: /\.css$/, // 正则匹配
        // loader: 'css-loader', // loader 选项只能使用一个 loader 一般不建议使用，使用 use 就好
        use: [
          'style-loader', // 通过使用多个 style 标签自动把 styles 插入到 DOM 中
          'css-loader' // 将 js 中的 css 通过使用多个 style 标签自动把 styles 插入到 DOM 中
        ] // 匹配到的文件会使用这些 loader 从后往前加载
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader' // 将 less 编译为 css
        ]
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024 // 小于 50kb 会转化为 base64
          }
        },
        // 构建配置
        generator: {
          // hash 打包后的文件名
          // ext 文件拓展名
          filename: 'images/[hash][ext][query]' // 输入文件的位置和名称
        }
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除 node_modules
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new ESLintPlugin(),
    new HTMLWebpackPlugin({
      template: resolve(__dirname, 'public/index.html') // 模板
    })
  ],
  devServer: {
    host: 'localhost',
    compress: true,
    port: 9000
  }
}
 