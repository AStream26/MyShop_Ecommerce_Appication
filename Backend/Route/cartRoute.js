const express = require('express');
const Router = express.Router();
const cartController = require('../Controllers/cartController');
Router.route('/').get(cartController.getcart).post(cartController.addItem).delete(cartController.deleteCart);
Router.route('/:id').delete(cartController.deleteItemWithId);



module.exports = Router;