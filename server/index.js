// const environment = process.argv[2];
const devServer = require('./middleware/webpackDev.js');

const express = require('express');


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle webpack dev server
devServer({app, env: process.argv[2], static: express.static})

app.listen(port, () => {
  console.log(`
  Server is listening on port ${port}
  visit http://127.0.0.1:${port}/`)
})