const mongoose = require('mongoose');

const Reviewschema = mongoose.Schema({
    review:{
        type:String,
        required:[true,'Review cannot be empty']
    },
    ratting:{
        type:Number,
        default:4.5,
        min:[1,'Rating must be above 1.0'],
        max:[5,'Rating must be below 5.0']
    },
    ratingAverage:{
       type:Number,
       default:4.5,
       min:[1,'Rating must be above 1.0'],
       max:[5,'Rating must be below 5.0'],
       set:val=>Math.round(val*10)/10 
    },
    ratingQuantity:{
       type:Number,
       default:0
    },
    createdAt:{
     type:Date,
     default:Date.now()
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:[true,'Review must belong to a user']
    },
    product:{
        type:mongoose.Schema.ObjectId,
        ref:'Product',
        required:[true,'Review must belong to a Product']
    }
},
    
    {   timestamps:true,
        toJSON:{virtuals:true},
        toObject:{virtuals:true}
    });



const Review  = mongoose.modal('Review',Reviewschema);
module.exports = Review;
