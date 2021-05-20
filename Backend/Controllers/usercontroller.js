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
  //  console.log(`from getMe ${req.user}`)
    req.params.id= req.user._id;
   // console.log(req.params);
    next();
});


exports.updateMe = catchAsync(async (req,res,next)=>{
   // console.log(req.params);
    let allowedupdate = ['name','email','shippingAddress'];
    if(req.body.password || req.body.confirmPassword)
    next(new AppError('Password cannot be updated using this route',400));
     const obj = filterObject(req.body,allowedupdate);
     // console.log(obj);
    
     const doc = await User.findByIdAndUpdate(req.user._id,obj,{
         runValidators:true,
         new:true
     });
   //  console.log(doc);
     res.status(200).json({
         status:"success",
         message:"Data updated successfully ",
         doc
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
