const path = require('path')

module.exports = {
  mode: 'development',
  
  entry: './demo02/index.js',
  // entry: {a: './demo02/index.js'},

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  }
}