const express = require('express');

const app = express();

require('./middleware.js')(app, express);

let port = 3000;

app.listen(port, () => {
  console.log('listening on port:' + port)
})