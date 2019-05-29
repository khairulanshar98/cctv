var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

var config = {
  mode: 'production',
  devtool: 'eval',
  //devtool: 'cheap-module-eval-source-map',
  entry: ['tether', './public/main.js'],
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, '.'),
    port: 3000,
    disableHostCheck: true
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'js/index.min.js',
    chunkFilename: 'js/vendor.bundle.js',
  },
  optimization: {
      splitChunks: {
          chunks: 'all'
      }
  },
  
  // Automatically reload the page when compilation is done.
  module: {
      rules: [{
              test: /\.js?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['react']
              }
          },
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['react']
              }
          },
          {
              test: /\.scss$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
              exclude: /public/,
          },
          {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
              exclude: /public/,
          },
          {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
              exclude: /node_modules/,
          },
          {
              test: /\.scss$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
              exclude: /node_modules/,
          },
          {
              test: /.*\.(gif|png|jpe?g|svg)$/i,
              use: [
                  'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
                  'image-webpack-loader'
              ]
          },
          { test: /\.(woff|woff2|eot|ttf)$/, use: 'url-loader?limit=100000' }
      ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          path: path.resolve(__dirname, './'),
          filename: "css/index.css",
          chunkFilename: "css/vendor.css"
      }),
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
          Tether: "tether",
          "window.Tether": "tether",
          Popper: ['popper.js', 'default'],
          Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
          Button: "exports-loader?Button!bootstrap/js/dist/button",
          Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
          Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
          Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
          Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
          Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
          Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
          Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
          Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
          Util: "exports-loader?Util!bootstrap/js/dist/util",
      }),
      new Dotenv({
          path: './.env', // Path to .env file (this is the default)
          safe: false // load .env.example (defaults to "false" which does not use dotenv-safe)
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
  ]
}
module.exports = config;
