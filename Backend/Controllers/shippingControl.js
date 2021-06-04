const shippingModal = require('../Modal/shipingAddress');
const factoryFunction = require('./factoryfunction');
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/Errorhandler');

exports.getAddressbyid = catchAsync(async (req,res,next)=>{
   
    const address = await shippingModal.find({user:req.user.id});

    res.status(200).json({
        
        address
    })
    
})

exports.DeleteAddressbyid = catchAsync(async (req,res,next)=>{

    
})

exports.updateAddressbyid = catchAsync(async (req,res,next)=>{

    
})