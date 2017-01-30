const path = require('path');
const webpack = require('webpack');

const DEV = process.env.NODE_ENV !== 'production';

const config = {
  entry: path.join(__dirname, 'src/KeysStore.js'),
  output: {
    filename: 'KeysStore.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader'
    }]
  },
  plugins: [],
  externals: {
    mobx: 'commonjs mobx'
  }
};

if (DEV) {
  config.devtool = 'cheap-module-source-map';
} else {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      acorn: true,
      'screw-ie8': true,
      compress: {
        warnings: false,
        drop_console: true // eslint-disable-line camelcase
      },
      comments: false
    })
  );
}

module.exports = config;
