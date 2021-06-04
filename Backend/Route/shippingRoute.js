const express = require('express');
const Router = express.Router();
const shipController = require('../Controllers/shippingControl');

Router.route('/').get(shipController.getAddressbyid);




module.exports = Router;