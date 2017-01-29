var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public/js');
var APP_DIR = path.resolve(__dirname, 'src/app/js');

var config = {
  entry: APP_DIR + '/index.jsx',
  devtool: "inline-sourcemap",
  output: {
    path: BUILD_DIR,
    filename: 'app.min.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders : ['babel']
      }
    ]
  }
};



module.exports = config;
