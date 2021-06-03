const express  = require('express');
const Router  = express.Router();
const Productcontroller  = require('../Controllers/productcontroller');
const Authcontroller = require('../Controllers/Authcontroller');


Router.route('/').get(Productcontroller.getALLProduct);
Router.route('/:id').get(Productcontroller.GetProductByid);


Router.use(Authcontroller.protect);
Router.use(Authcontroller.validateRole('admin'));

Router.route('/').post(Productcontroller.addProduct);
Router.patch('/:id',Productcontroller.editProduct);
Router.route('/:id').delete(Productcontroller.delete);


module.exports = Router; 