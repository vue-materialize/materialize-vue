/**
 * 生成 npm 包 入口文件
 */
var config = require('./config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var nodeExternals = require('webpack-node-externals')

module.exports = merge(baseWebpackConfig, {
  entry: './src/index.js',
  output: {
    path: config.build.assetsRoot,
    filename: 'mvui.common.js',
    libraryTarget: 'commonjs2'
  },
  externals: [
    {
      vue: 'vue'
    },
    nodeExternals()
  ]
})
