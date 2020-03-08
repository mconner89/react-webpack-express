const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: __dirname + '/client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  plugins: [
    new LiveReloadPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};