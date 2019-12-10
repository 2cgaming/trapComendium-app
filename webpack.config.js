const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    inline: true,
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3001'
    },
    publicPath: "/trapcompendium"
  },
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist/trapcompendium/'),//path.resolve('../..', 'go/src/github.com/pafrias/2cgaming-api/web/trapcompendium')
    publicPath: '/trapcompendium'
  },
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