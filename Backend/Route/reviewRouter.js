const express = require('express');
const Router = express.Router({mergeParams:true});
const Authcontroller = require('../Controllers/Authcontroller');
const ReviewController = require('../Controllers/reviewcontroller');

Router.use(Authcontroller.protect);

Router.route('/').get(ReviewController.getAllReview).post(Authcontroller.validateRole('user'),ReviewController.getUserandProductId,ReviewController.CreateReview);
Router.route('/id').get(ReviewController.getReview)
                   .patch(Authcontroller.validateRole('user','admin'),ReviewController.CreateReview)
                   .delete(Authcontroller.validateRole('user','admin'),ReviewController.deleteReview);



module.exports = Router;