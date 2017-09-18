const path = require('path')

module.exports = {
  entry: ['./src/webpack-dependence.js', './src/webpack-entry-1.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  }
}