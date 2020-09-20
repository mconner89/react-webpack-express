const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

const srcPath = path.resolve(__dirname, '..', 'client', 'src');
const distPath = path.resolve(__dirname, '..', 'client', 'public');

module.exports = {
  mode: 'development',
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      path.resolve(srcPath, 'index.jsx')
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: distPath,
    publicPath: '/'
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(distPath),
    hot: true,
    stats: {colors: true },
    publicPath: '/'
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  ssr: false,
                  displayName: true,
                  minify: false
                }
              ]
            ]
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