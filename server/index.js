const environment = process.argv[2];

const path = require('path');
const express = require('express');

const distPath = path.resolve('client', 'public')
const app = express();
const port = 3000;

if(environment === 'development') {
  const webpack = require('webpack');
  const config = require('../webpack/webpack.config.dev.js');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    hot: true,
    reload: true,
    stats: false
  }))

  app.use(require('webpack-hot-middleware')(compiler))
  app.use(express.static(distPath));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(distPath, 'index.html'))
  })
}
if(environment === 'production'){
  app.use('/', express.static(distPath));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
  console.log(`
  Server is listening on port ${port}
  visit http://127.0.0.1:${port}/`)
})