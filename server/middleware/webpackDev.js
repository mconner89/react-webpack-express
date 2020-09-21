const webpack = require('webpack');
const config = require('../../webpack/webpack.config.dev.js');
const compiler = webpack(config);



module.exports = ({ app, env='development', static }) => {
  const path = require('path');
  const distPath = path.resolve(__dirname, '../../client', 'public');

  if(env === 'development') {

    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
      hot: true,
      reload: true,
      stats: false
    }))

    app.use(require('webpack-hot-middleware')(compiler))
    app.use(static(distPath));

    app.get('/', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'))
    })
  } else if(env === 'production'){
    app.use('/', static(distPath));
  }


}