const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const webpack = require('webpack');
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  performance: { hints: false },
  output: {
    path: path.join(__dirname, "/build/production"),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
    }),
    // clean build files
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  }
})
