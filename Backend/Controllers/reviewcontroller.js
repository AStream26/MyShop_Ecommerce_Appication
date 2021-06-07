const Review =  require('../Modal/Reviewmodal');
const factoryFunction = require('./factoryfunction');
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/Errorhandler');



exports.getUserandProductId = (req,res,next)=>{
    if(!req.body.product) req.body.product = req.params.productid;
    if(!req.body.user) req.body.user = req.user._id;

    // console.log(req.param.productid);
    // console.log(req.user._id);
    next();
}

exports.getAllReview = factoryFunction.getALL(Review);
exports.getReview = factoryFunction.getOne(Review);
exports.CreateReview = factoryFunction.createOne(Review);
exports.deleteReview = factoryFunction.deleteOne(Review);
exports.updateReview = factoryFunction.updateOne(Review);
