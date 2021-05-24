const User = require('../Modal/Usermodal');
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/Errorhandler');
const factory = require('./factoryfunction');
const Ship = require('../Modal/shipingAddress');
let log = console.log;
function filterObject(obj,allowed){
    let newobj = {};
    Object.keys(obj).forEach((el)=>{
          if(allowed.includes(el))
            newobj[el] = obj[el];
             
    });
    return newobj;
}

exports.getMe = catchAsync(async (req,res,next)=>{
    console.log(`from getMe ${req.user}`)
    req.params.id= req.user._id;
   // console.log(req.params);
    next();
});


exports.updateMe = catchAsync(async (req,res,next)=>{
   //console.log(req.params);
   log('Started');
    let allowedupdate = ['name','email','shippingAddress'];
    if(req.body.password || req.body.confirmPassword)
    next(new AppError('Password cannot be updated using this route',400));
     const obj = filterObject(req.body,allowedupdate);
     // console.log(obj);
     let doc;
     if('shippingAddress' in obj){
         log("Found Address");
         log(obj.shippingAddress);
        const Address = new Ship(obj.shippingAddress);
        Address.user = req.user._id;
        await Address.save();

        // doc = await User.findById(req.user._id);
        req.user.shippingAddress.push(Address._id);
      //  doc.shippingAddress.push(Address._id);
      await req.user.save();
      doc = req.user;
        log("Done");
     }
     else{
          
        doc = await User.findByIdAndUpdate(req.user._id,obj,{
        runValidators:true,
        new:true
    });
     }
   
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
