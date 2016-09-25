const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './js/app.jsx',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'output.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: "/node_modules/"
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/style.css',{
      allChunks: true
    })
  ]
}
