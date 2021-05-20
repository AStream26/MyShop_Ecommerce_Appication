const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt  = require('bcryptjs');

const UserSchema = mongoose.Schema({
   name:{
       type:String,
       required:[true,'user must have a name ']
   },
   email:{
       type:String,
       unique:true,
       lowercase:true,
       required:[true,'user must have an email '],
       validate:[validator.isEmail,'Please enter correct Email ']
   },
   photo:{
       type:String,
       default:'default.jpg'
   },
   password:{
       type:String,
       required:[true,'Please Provide Password'],
       minLength:8,
       select:false
    },
    confirmPassword:{
        type:String,
        required:[true,'Please confirm your Password'],
        validate:{
            validator:function(el){
                return el === this.password
            },
            message:'Password and confirm Password must be same'
        },
        select:false
    },
    role:{
        type:String,
        enum:['user','admin','seller'],
        default:'user'
    },
    passwordChangeAt:Date,
    passwordResetToken:String,
    passwordResetToken_Expires:Date,

    active:{
        type:Boolean,
        default:true,
        select:false
    }
});





UserSchema.pre('save',async function(next){
      
    if(!this.isModified('password'))
    return next();

    this.password = await bcrypt.hash(this.password,12);
    this.confirmPassword = undefined;
    next();
});
UserSchema.pre('save',function(next){
    if(!this.isModified('password')||(this.isNew))
    return next();
    //console.log("ab");
    this.passwordChangeAt = Date.now();
    next();
});

UserSchema.pre(/^find/,function(next){
    //this point to current query not document
    this.find({active:{$ne:false}});
    next();

});


UserSchema.methods.checkPassword = function(candidatePassword,userPassword){
    return bcrypt.compare(candidatePassword,userPassword);
}

UserSchema.methods.DoesPasswordChangedAfter=function(JWTtime){

   if(this. passwordChangeAt){
       const time = parseInt(this.passwordChangeAt.getTime()/1000,10);

       return JWTtime < time ; //Password get changed after jwt token was issued 
   }
    return false;// Password Does not changed
}

const User = mongoose.model('User',UserSchema);
module.exports  = User;