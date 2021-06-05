const express = require('express');
const Router = express.Router();
const cartController = require('../Controllers/cartController');

Router.route('/').get(cartController.getcart).post(cartController.addItem);
Router.route('/:id').post(cartController.addItemWithId);
Router.route('/:id/:productid').delete(cartController.deleteItemWithId);



module.exports = Router;