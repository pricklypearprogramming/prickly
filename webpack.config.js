var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: SRC_DIR + '/src/index.js', // entry point
  output: {
    path: DIST_DIR + '/src',
    filename: 'bundle.js',
    publicPath: '/src/',
    // place where bundled app will be served
  },
  devServer: {
    inline: true, // autorefresh
    port: 8080, // development port server
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "styles!css" },
      {
        test: /\.(js|jsx)$/, // search for js files
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'], // use es2015 and react
          plugins: ['transform-runtime']
        },
      },
    ],
  },
};
module.exports = config;