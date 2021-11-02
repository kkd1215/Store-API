const controller = require('./controller');
const routes = require('./routes');
const model = require('./model');


const products = {
  controller,
  routes,
  model
}

module.exports = products;