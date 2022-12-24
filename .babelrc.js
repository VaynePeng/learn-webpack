module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 按需引入 core-js
        corejs: {
          version: '3.8'
        }
      }
    ]
  ]
}
