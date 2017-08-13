
// variables
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PROD = JSON.parse(process.env.PROD_ENV || '0');

// webpack config
module.exports = {
  entry: ['babel-polyfill', './assets/_scripts/main.js', './assets/_styles/main.scss'],
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { // regular css files
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      { // scss files
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: PROD ? [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/[name].styles.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {from:'./assets/images',to:'images'}
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ] : [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/[name].styles.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {from:'./assets/images',to:'images'},
      {from:'./assets/_scripts/plugins',to:'plugins'}
    ])
  ]
};