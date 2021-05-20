const User = require('../Modal/Usermodal');
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/Errorhandler');
const factory = require('./factoryfunction');


function filterObject(obj,allowed){
    let newobj = {};
    Object.keys(obj).forEach((el)=>{
          if(allowed.includes(el))
            newobj[el] = obj[el];
             
    });
    return newobj;
}

exports.getMe = catchAsync(async (req,res,next)=>{
    req.params.id= req.user.id;
    next();
});


exports.updateMe = catchAsync(async (req,res,next)=>{
      
    let allowedupdate = ['name','email','shippingAddress'];
    if(req.body.password || req.body.confirmPassword)
    next(new AppError('Password cannot be updated using this route',400));
     const obj = filterObject(req.body,allowedupdate);
      
     const user = await User.findByIdAndUpdate(req.params.id,obj,{
         runValidators:true,
         new:true
     });

     res.status(200).json({
         status:"success",
         message:"Data updated successfully ",
         user
     })
     
         
})

exports.getuser =factory.getOne(User);
exports. getAllusers =factory.getALL(User);
exports. updateuser =factory.updateOne(User);
exports. deleteuser = factory.deleteOne(User);

exports. newuser = (req,res)=>{
    res.status(500).json({
        status:"Error",
        message:"Route not defined"
    });
}
