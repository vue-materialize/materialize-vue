var path = require('path')
var config = require('./config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var slugify = require('transliteration').slugify
var striptags = require('./strip-tags')
var md = require('markdown-it')()
var isProd = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function assetsPath (_path) {
  return path.posix.join(config.dev.assetsSubDirectory, _path)
}

function convert (str) {
  str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
  })
  return str
}

function wrap (render) {
  return function () {
    return render.apply(this, arguments)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code v-pre class="', '<code v-pre class="hljs ')
      .replace('<code>', '<code class="hljs">')
      .replace('<code v-pre>', '<code v-pre class="hljs">')
  }
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
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          use: [
            [require('markdown-it-anchor'), {
              level: 2,
              slugify: slugify,
              permalink: true,
              permalinkBefore: true,
              permalinkHref: function (slug) {
                return '#' + slug
              }
            }],
            [require('markdown-it-container'), 'demo', {
              validate: function (params) {
                return params.trim().match(/^demo\s*(.*)$/)
              },
              render: function (tokens, idx) {
                var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
                if (tokens[idx].nesting === 1) {
                  var description = (m && m.length > 1) ? m[1] : ''
                  var content = tokens[idx + 1].content
                  var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
                  var script = striptags.fetch(content, 'script')
                  var style = striptags.fetch(content, 'style')
                  var jsfiddle = { html: html, script: script, style: style }
                  var descriptionHTML = description ? md.render(description) : ''

                  jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle))

                  return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                            <div class="source" slot="source">${html}</div>
                            ${descriptionHTML}
                            <div class="highlight" slot="highlight">`
                }
                return `</div></demo-block>\n`
              }
            }],
            [require('markdown-it-container'), 'tip']
          ],
          preprocess: function (MarkdownIt, source) {
            MarkdownIt.renderer.rules.table_open = function () {
              return '<table class="table">'
            }
            MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence)
            return source
          }
        }
      }
    ]
  }
}
