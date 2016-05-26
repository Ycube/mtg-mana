const express = require('express');

const app = express();

let port = 3000;


app.get('/', (req, res) => {
  res.send('place holder for mtg');
})
app.listen(port, () => {
  console.log('listening on port:' + port)
})