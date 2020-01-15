const express = require('express');
const app = express();

const port = 4444;

/* These parse JSON and encoded url's */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Render from webpack bundle.js */
app.use('/home', express.static(__dirname + '/../public'));



/* If all else redirect home */
app.get('*', (req, res) => {
  res.redirect(301, '/home')
})

/*************************************
*** DO NOT PUT ANYTHING AFTER THIS ***
**************************************/
app.listen(port, () => {
  console.log(`
  Server is listening on port ${port}
  visit http://127.0.0.1:${port}/home`)
})