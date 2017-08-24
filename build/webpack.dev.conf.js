/**
 * 1、文档开发，对应 entry: './document.main.js'
 * 2、组件开发，对应 entry: './playground/main.js'
 * 3、文档构建，对应 entry: { document: './document/main.js', 'mvui': './src/index.jss' }
 */
var path = require('path')
var webpack = require('webpack')
var config = require('./config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var nodeExternals = require('webpack-node-externals')
var isProd = process.env.NODE_ENV === 'production'
var isPlay = !!process.env.PLAY_ENV

var webpackConfig = merge(baseWebpackConfig, {
  entry: isProd ? {
    document: './document/main.js',
    'mvui': './src/index.js'
  } : (isPlay ? './playground/main.js' : './document/main.js'),
  output: {
    path: config.dev.assetsRoot,
    filename: isProd ? '[name].[chunkhash:7].js' : '[name].js',
    publicPath: config.dev.assetsPublicPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new FriendlyErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: isPlay ? './playground/index.html' : './document/index.tpl',
      inject: true
    })
  ]
})

if (isProd) {
  webpackConfig.output.chunkFilename = isProd ? '[name].[chunkhash:7].js' : '[name].js'
  webpackConfig.externals = [
    {
      vue: 'Vue',
      'vue-router': 'VueRouter'
    },
    nodeExternals()
  ]
  webpackConfig.plugins.push.apply(webpackConfig.plugins, [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:7].css'
    }),
    // 压缩抽取的 CSS。 我们正在使用此插件，以便可以重复使用来自不同组件的可能重复的CSS。
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // split mvui js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'mvui',
      minChunks: function (module, count) {
        // node_modules中的任何必需的模块都被提取到 mvui
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // 将 webpack运行时和模块清单提取到其自己的文件，以防止在更新应用程序包时更新 mvui哈希
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['mvui']
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../document/static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ])
}

module.exports = webpackConfig
