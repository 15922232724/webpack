const path = require('path')
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {

  // 入口
  // entry: path.join(__dirname, './src/index.js'),
  entry: ["babel-polyfill", './src/index.js'
    // pageTwo: './src/main.js',
  ],
  //出口
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'b.js',
    publicPath: '/dist/'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    overlay: true
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()

  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'

        ],

      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      }]
  }


  //模式


}