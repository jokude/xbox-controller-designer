const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./common.config.js');

const resolve = (location) => path.resolve(__dirname, location);
const publicPath = process.env.PUBLIC_PATH || '/';

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].bundle.production.js',
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            preprocess: require('svelte-preprocess')({
              typescript: {
                tsconfigFile: resolve('../tsconfig.json')
              }
            })
          }
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css)$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(svg|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      BASE_PATH: JSON.stringify(publicPath)
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve('../src/assets'),
          to: resolve('../dist/assets')
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: resolve('../src/html/template.html'),
      chunks: ['index'],
      minify: {
        collapseWhitespace: true
      }
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: [resolve('../dist/base.bundle.production.js')]
    })
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { mergeLonghand: false }]
        }
      })
    ]
  }
});
