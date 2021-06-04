const mongoose = require('mongoose');
const validator = require('validator');

const OrderSchema = new mongoose.Schema ({
   
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:[true,'Order must belong to a user']
    },
   
    orderItems:[
        {
           name:{type:String,required:true},
           quantity:{type:Number,required:true},
           price:{type:Number,required:true},
           image:{type:Array,required:true},
           product:{
            type:mongoose.Schema.ObjectId,
            ref:'Product',
            required:[true,'Order must belong to a Product']
                   }
        }
    ],
    shippingAddress:{
        Address:{type:String,required:true},
        City:{type:String,required:true},
        State:{type:String,required:true},
        Pincode:{type:String,required:true},
        Country:{type:String,required:true},
        MobileNo: {type:String,required:true},
        user:String
},
    paymentMethod:{
        type:String,
        required:true
    },
    paymentResults:{
       id:{type:String},
       status:{type:String},
       update_time:{type:String},
       email_address:{type:String}
    },
    
    taxPrice:{
        type:Number,
        default:0.0
    },
    shippingPrice:{
        type:Number,
        default:0.0
    },
    totalPrice:{
        type:Number,
        default:0.0
    },
    isPaid:{
        type:Boolean,
        default:false
    },
    paidAt:{
        type:Date
    },
    isDeliver:{
        type:Boolean,
        default:false
    },
    deliverAt:{
        type:Date
    }


},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true},
    timestamps:true
})

const Order = mongoose.model('Order',OrderSchema);
module.exports = Order;