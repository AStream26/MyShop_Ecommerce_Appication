const express = require('express');
const Router = express.Router();
const Authcontroller = require('../Controllers/Authcontroller');
const Ordercontroller = require('../Controllers/Ordercontroller');


Router.use(Authcontroller.protect);

//console.log('a');
Router.get('/myorders',Ordercontroller.getOrders);
Router.post('/placeorder',Ordercontroller.orderrequest);
Router.get('/:id',Ordercontroller.getorder);
Router.patch('/:id/pay',Ordercontroller.Pay);

Router.use(Authcontroller.validateRole('admin'));
Router.get('/',Ordercontroller.getAllOrder);



module.exports = Router;