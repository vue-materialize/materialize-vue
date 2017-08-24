var path = require('path')
var config = require('./config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var isProd = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function assetsPath (_path) {
  return path.posix.join(config.dev.assetsSubDirectory, _path)
}

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'main': resolve('src'),
      'document': resolve('document'),
      'packages': resolve('packages'),
      'playground': resolve('playground'),
      'mvui': resolve(''),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('document'), resolve('palyground'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: isProd ? ExtractTextPlugin.extract({
              fallback: "vue-style-loader",
              use: "css-loader"
            }) : 'vue-style-loader!css-loader',
            scss: isProd ? ExtractTextPlugin.extract({
              fallback: "vue-style-loader",
              use: ["css-loader", "sass-loader"]
            }) : 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('document'), resolve('palyground'), resolve('test')]
      },
      {
        test: /\.css$/,
        use: isProd ? ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }) : [
          'style-loader',
          'css-loader',
          'autoprefixer-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: isProd ? ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        }) : [
          'style-loader',
          'css-loader',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
