const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    inline: true,
    compress: true,
    contentBase: path.join(__dirname, 'dist')
  },
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}