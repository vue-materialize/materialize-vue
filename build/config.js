var path = require('path')

module.exports = {
  play: {
    env: {
      NODE_ENV: '"playground"'
    }
  },
  build: {
    env: {
      NODE_ENV: '"production"'
    },
    assetsRoot: path.resolve(__dirname, '../lib')
  },
  dev: {
    env: {
      NODE_ENV: '"development"'
    },
    port: 8080,
    autoOpenBrowser: true,
    index: path.resolve(__dirname, '../document/mvui/index.html'),
    assetsRoot: path.resolve(__dirname, '../document/mvui'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    proxyTable: {}
  },
  test: {
    env: {
      NODE_ENV: '"testing"'
    }
  }
}
