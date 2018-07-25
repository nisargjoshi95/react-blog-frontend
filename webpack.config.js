const path = require('path');
// Generates HTML file w script tag injected, writes to dist and minifies
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
        // [
        //   {
        //     loader: 'style-loader'
        //   },
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       modules: false,
        //       importLoaders: 1,
        //       localIdentName: '[name]_[local]_[hash:base64]',
        //       sourceMap: true,
        //       minimize: true
        //     }
        //   },
        //   {
        //     loader: 'sass-loader',
        //     options: {
        //       sourceMap: true
        //     }
        //   }
        // ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new ExtractTextPlugin('css/mystyles.css')
  ],
  devServer: {
    proxy: {
      '/api': 'http://47.187.208.197'
    }
  }
};