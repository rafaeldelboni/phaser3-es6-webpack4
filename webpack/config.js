const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev')

const dirNode = path.join(__dirname, '../node_modules')
const dirApp = path.join(__dirname, '../src')
const dirAssets = path.join(__dirname, '../assets')

const appHtmlTitle = 'Webpack4 Phaser3 Boilerplate'

/**
 * Webpack Configuration
 */
module.exports = {
  entry: {
    bundle: path.join(dirApp, 'index.js'),
    vendor: ['phaser']
  },
  resolve: {
    modules: [
      dirNode,
      dirApp,
      dirAssets
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: IS_DEV,
      'CANVAS_RENDERER': JSON.stringify(true),
      'WEBGL_RENDERER': JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.ejs'),
      title: appHtmlTitle
    })
  ],
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: dirApp,
        exclude: dirNode,
        options: {
          compact: true
        }
      },
      // STYLES
      {
        test: /\.css$/,
        include: dirAssets,
        exclude: dirNode,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV
            }
          }
        ]
      },
      // CSS / SASS
      {
        test: /\.scss/,
        include: dirAssets,
        exclude: dirNode,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV
            }
          }
        ]
      },
      // IMAGES
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        include: dirAssets,
        exclude: dirNode,
        options: {
          name: '[path][name].[ext]'
        }
      },
      // RAW
      {
        test: [ /\.vert$/, /\.frag$/ ],
        use: 'raw-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    }
  }
}
