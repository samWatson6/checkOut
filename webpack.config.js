const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack');
const cssLoader = require('css-loader');
const path = require('path');

const config = {
  entry: path.resolve(__dirname, 'client/index.jsx'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin(),
  //   // new HtmlWebpackPlugin({template: './src/client/index.html'})
  // ]
};


  module.exports = config;
  