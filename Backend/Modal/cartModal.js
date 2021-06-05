const mongoose  = require('mongoose');

const ItemSchema = new mongoose.Schema({
    
    product:{
        type:mongoose.Schema.ObjectId,
        ref:'Product'
    },
    quantity:Number

},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true},
    timestamps:true
});





const CartSchema = new mongoose.Schema({
    
   products:[ItemSchema],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:[true,'User must be there']
    }


},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true},
    timestamps:true
});

CartSchema.index({user:1});

const Cart = mongoose.model('Cart',CartSchema);
module.exports  = Cart;