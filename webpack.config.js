const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  entry: {
    background: './src/background.js',
    popup: './src/popup.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
