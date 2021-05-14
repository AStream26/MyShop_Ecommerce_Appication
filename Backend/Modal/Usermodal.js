const mongoose = require('mongoose');
const validator = require('validator');

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
   image:{
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
    active:{
        type:Boolean,
        default:true,
        select:false
    }
});


const User = mongoose.modal('User',UserSchema);
module.exports  = User;