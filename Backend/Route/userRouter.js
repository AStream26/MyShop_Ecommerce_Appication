const express = require('express');
const Router = express.Router();
const Authcontroller = require('../Controllers/Authcontroller');
const usercontrol = require('./../Controllers/usercontroller');
const shippingRoute = require('./shippingRoute');
const cartRouter  = require('./cartRoute');

Router.post('/signup',Authcontroller.signup);
Router.post('/login',Authcontroller.login);
Router.get('/logout',Authcontroller.logout);
Router.route('/forgotpassword').post(Authcontroller.forgetPassword);
Router.route('/resetpassword/:token').post(Authcontroller.resetPassword);



Router.use(Authcontroller.protect);

Router.use('/shipping',shippingRoute);
Router.use('/cart',cartRouter);

Router.route('/updatepassword').patch(Authcontroller.updatePassword);
Router.route('/profile').get(usercontrol.getMe,usercontrol.getuser);
 Router.route('/updateuser').patch(usercontrol.getMe,usercontrol.uploadPhoto,usercontrol.resizeImage,usercontrol.updateMe);
// Router.route('/deleteuser').delete(usercontrol.deleteMe);


Router.use(Authcontroller.validateRole('admin'));

Router.route('/').get(usercontrol.getAllusers).post(usercontrol.newuser);
Router.route('/:id').get(usercontrol.getuser).patch(usercontrol.updateuser).delete(usercontrol.deleteuser);



module.exports = Router;