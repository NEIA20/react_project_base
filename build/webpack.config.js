const path = require('path');

console.log(path.resolve(__dirname, '../'));

module.exports = {
//   context: path.resolve(__dirname, '../'),
  entry: path.resolve(__dirname, '../', 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, '../', 'assets'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
