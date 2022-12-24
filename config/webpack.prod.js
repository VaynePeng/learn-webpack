const { resolve } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') // html 自动引入
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // css 分离
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // css 压缩

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '../dist'),
    clean: true // 每次打包前都会清空之前的内容
  },
  module: {
    // loader
    rules: [
      {
        test: /\.css$/, // 正则匹配
        // loader: 'css-loader', // loader 选项只能使用一个 loader 一般不建议使用，使用 use 就好
        use: [
          // 'style-loader', // 通过使用多个 style 标签自动把 styles 插入到 DOM 中
          MiniCssExtractPlugin.loader,
          'css-loader', // 将 js 中的 css 通过使用多个 style 标签自动把 styles 插入到 DOM 中
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ] // 匹配到的文件会使用这些 loader 从后往前加载
      },
      {
        test: /\.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'less-loader' // 将 less 编译为 css
        ]
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于 10kb 会转化为 base64
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
        loader: 'babel-loader',
        options: {
          cacheDirectory: true, // 开启 babel 缓存
          cacheCompression: false // 关闭缓存文件的压缩
        }
      }
    ]
  },
  optimization: {
    // 压缩
    minimizer: [
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      template: resolve(__dirname, '../public/index.html') // 模板
    })
  ],
  resolve: {
    alias: {
      '@js': resolve(__dirname, '../src/js')
    },
    extensions: ['.js', '.ts', '.json']
  },
  devtool: 'source-map'
}
