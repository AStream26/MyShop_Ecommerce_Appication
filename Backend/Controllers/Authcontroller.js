const {promisify}  = require('util');
const userModal = require('../Modal/Usermodal');
const catchAsync = require('../util/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('../util/Errorhandler');

function sendResponse(res,message,statusCode,token,data){

     const options = {
          expires:new Date(Date.now() + (process.env.EXPIRES)*24*60*60*1000),
          httpOnly:true,
         
     }
     if(process.env.NODE_ENV=='PRODUCTION')
     options.secure = true;
  // console.log(options);
     res.cookie('jwt',token,options);

     res.status(statusCode).json({
          status:"success",
          message,
          data
     });
}

//generating the token from jsonwebtoken package using 
function generatetoken(id){
     const token = jwt.sign({id:id}
          ,process.env.JWT_SECRET,
          {
               expiresIn:process.env.JWT_EXPIRE
          });
          return token;
}

function sendToken(user,req,res,statusCode){
 
        const token = generatetoken(user._id);
        user.password = undefined;
        
        sendResponse(res,"successfully signed in",200,token,user);
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------

exports.signup = catchAsync(async(req,res,next)=>{
   
    const user =  await userModal.create({
          name:req.body.name,
          email:req.body.email,
          password:req.body.password,
          confirmPassword:req.body.confirmPassword
     });
   
     sendToken(user,req,res,200);

});

exports.login = catchAsync(async(req,res,next)=>{
     const {email,password} = req.body;
      
     if(!email || !password)
       return next(new AppError('Please provide correct data !!',400));
     
     const user = await userModal.findOne({email}).select('+password');

     if(!user || !(await user.checkPassword(password,user.password)))
     return next(new AppError('Email or Password is incorrect',401));

     user.password = undefined;
     const token = generatetoken(user._id);
     sendResponse(res,"successfully logedin",200,token,user);

});

exports.protect = catchAsync(async (req,res,next)=>{
     let token;
     //checking for token from the reqest header

     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
     token = req.headers.authorization.split(' ')[1];
     console.log(token);}
     else if(req.cookies.jwt){
          token = req.cookies.jwt;
          
     }
   
          if(!token)
            return next(new AppError('Failed to Logined !!',401));
     
     const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);
    
    const currentuser = await userModal.findById(decoded.id);

    if(!currentuser)
    return next(new AppError('Invalid Token either expired or user does not exists !!',401));

    if(currentuser.DoesPasswordChangedAfter(decoded.iat)){
         return next(new AppError('Invalid Login , User has Recently changed the password , Please  Login Again'));
    }
 //  console.log(currentuser);
   req.user = currentuser;
   next();

})


exports.validateRole = (...roles) =>{
     return (req,res,next)=>{
          if(!roles.includes(req.user.role))
            return next(new AppError("You Don't have permission to perform this action !!",403));
          return next();
     }
}

exports.updatePassword = catchAsync(async(req,res,next)=>{
     res.status(404).json({
          status:"Will be Implemented"
     });
})

exports.resetPassword = catchAsync(async(req,res,next)=>{
     res.status(404).json({
          status:"Will be Implemented"
     });
})

exports.forgetPassword = catchAsync(async(req,res,next)=>{
     res.status(404).json({
          status:"Will be Implemented"
     });
})


exports.isLogined=     async (req,res,next)=>{

     //1) Getting token from cookies

     if(req.cookies.jwt){

    try{
         //2) verification of the token
     const decoded =  await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);
 
 
     //checking if user exists or not
     const currentuser = await User.findById(decoded.id);
     if(!currentuser){
         return next();
     }
 
     //check if user has changed the password after the token was issued 
     if(currentuser.passwordChange(decoded.iat)){
         return next();
     }
     
     
     res.status(200).json({
          currentuser
     });
       return next();
    }catch(err){
       return  next();
    }
 
     
 }
next();
};

exports.logout = (req,res)=>{
     //console.log("ajjsjs");
     res.cookie('jwt','loggedout',{
      
         expires:new Date(Date.now()+(10*1000)),
         httpOnly:true
     });
 
     res.status(200).json({status:'success'});
 }