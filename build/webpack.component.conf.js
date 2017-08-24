/**
 * 生成单个组件文件
 */
var config = require('./config')
var components = require('../components.json')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var nodeExternals = require('webpack-node-externals')

module.exports = merge(baseWebpackConfig, {
  entry: components,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: [
    {
      vue: 'vue'
    },
    nodeExternals()
  ]
})
