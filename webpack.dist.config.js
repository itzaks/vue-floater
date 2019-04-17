var path = require('path')

module.exports = {
  entry: './vue-floater.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'vue-floater.js',
    library: 'VueFloater',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.vue', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
