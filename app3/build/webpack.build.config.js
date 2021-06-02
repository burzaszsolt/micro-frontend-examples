const path = require('path');

module.exports = {
  entry: {
    main: ['@babel/polyfill', path.resolve('.', 'src', 'fragment.js')]
  },
  resolve: {
    alias: {
      src: path.resolve('.', 'src')
    },
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve('..', 'host', 'public', 'microfrontends'),
    filename: 'mf-app3.js',
    library: 'mfApp3',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
