const morgan = require('morgan')
const bodyParser  = require('body-parser');

module.exports = (app,express) => {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname+'/../client'));

}