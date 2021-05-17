const express = require('express');
const Router = express.Router();
const Authcontroller = require('../Controllers/Authcontroller');


Router.post('/signup',Authcontroller.signup);
Router.post('/login',Authcontroller.login);

module.exports = Router;