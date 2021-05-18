const User = require('../Modal/Usermodal');
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/Errorhandler');
const factory = require('./factoryfunction');



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
