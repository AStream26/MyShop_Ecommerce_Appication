const express  = require('express');
const Router  = express.Router();
const Productcontroller  = require('../Controllers/productcontroller');
const Authcontroller = require('../Controllers/Authcontroller');

Router.route('/').get(Productcontroller.getALLProduct);
Router.route('/:id').get(Productcontroller.GetProductByid);
module.exports = Router;