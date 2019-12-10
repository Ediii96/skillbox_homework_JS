"use strict";

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {

  entry: {
      './bundle.js': './button/index.js'
  },
  output: {
      path: path.resolve(__dirname, "./bundle"),
      filename: "[name]"
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,        
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      inject: 'body'
    }),
    new ExtractTextPlugin("build.css")
  ],
  watch: true,
  watchOptions: {
      aggregateTimeout: 300
  }

}