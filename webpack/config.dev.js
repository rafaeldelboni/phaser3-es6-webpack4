const merge = require('webpack-merge')
const webpackConfig = require('./config')

module.exports = merge(webpackConfig, {
  devtool: 'eval',

  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js'
  },

  devServer: {
    port: 3000
  }
})
