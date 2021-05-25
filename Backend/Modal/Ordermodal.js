const mongoose = require('mongoose');
const validator = require('validator');

const OrderSchema = ({
   
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
   
    OrderItems:[
        {
           name:{type:String,required:true},
           quantity:{type:Number,required:true},
           price:{type:Number,required:true},
           image:{type:String,required:true},
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
        ModileNo: {type:String,required:true}
},
    PaymentMethod:{
        type:String,
        required:true
    },
    PaymentResults:{
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
    PaidAt:{
        type:Date
    },
    isDeliver:{
        type:Boolean,
        default:false
    },
    DeliverAt:{
        type:Date
    }


},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true},
    timestamps:true
})

const Order = mongoose.modal('Order',OrderSchema);
module.exports = Order;