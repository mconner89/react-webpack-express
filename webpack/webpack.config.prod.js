const path = require('path');

const srcPath = path.resolve(__dirname, '..', 'client', 'src');
const distPath = path.resolve(__dirname, '..', 'client', 'public');

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve(srcPath, 'index.jsx')
  },

  output: {
    filename: '[name].bundle.js',
    path: distPath
  },
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
                  displayName: false,
                  minify: true
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