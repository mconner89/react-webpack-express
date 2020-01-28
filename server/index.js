const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Render from webpack bundle.js */
app.use(express.static(__dirname + '/../public'));

/*************************************
*** DO NOT PUT ANYTHING AFTER THIS ***
**************************************/
app.listen(port, () => {
  console.log(`
  Server is listening on port ${port}
  visit http://127.0.0.1:${port}/`)
})