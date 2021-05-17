const {promisify}  = require('util');
const userModal = require('../Modal/Usermodal');
const catchAsync = require('../util/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('../util/Errorhandler');

function sendResponse(res,message,statusCode,token,data){

     res.status(statusCode).json({
          status:"success",
          message,
          token,
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
     sendResponse(res,"successfully logedin",200,token);

});

exports.protect = catchAsync(async (req,res,next)=>{
     let token;
     //checking for token from the reqest header
     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
     token = req.headers.authorization.split(' ')[1];
     
          if(!token)
            return next(new AppError('Failed to Logined !!',401));
     
     const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);

    const currentuser = await userModal.findById(decoded.id);

    if(!currentuser)
    return next(new AppError('Invalid Token either expired or user does not exists !!',401));

    if(currentuser.DoesPasswordChangedAfter(decoded.iat)){
         return next(new AppError('Invalid Login , User has Recently changed the password , Please  Login Again'));
    }
   console.log(currentuser);
   req.user = currentuser;
   next();

})
