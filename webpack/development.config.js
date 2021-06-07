const path = require('path');
const express = require('express');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./common.config.js');

const resolve = (location) => path.resolve(__dirname, location);
const publicPath = '/';

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    filename: '[name].bundle.development.js',
    publicPath
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: false,
            hotReload: false,
            preprocess: require('svelte-preprocess')({
              dev: true,
              typescript: {
                tsconfigFile: resolve('../tsconfig.json')
              }
            })
          }
        }
      },
      {
        test: /\.ts?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(scss|css)$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      },
    /*  {
        test: /\.svg$/i,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            }
          },
        ],
      },*/
    ]
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      BASE_PATH: JSON.stringify(publicPath)
    }),
    new HtmlWebpackPlugin({
      template: resolve('../src/html/template.html'),
      chunks: ['index']
    })
  ],
  devServer: {
    port: 3000,
    hot: true,
    host: '0.0.0.0',
    public: 'localhost',
    publicPath: '/',
    historyApiFallback: true,
    before: function (app) {
      const assetsPath = resolve('../src/assets');
      app.use('/assets', express.static(assetsPath));
    }
  }
});
