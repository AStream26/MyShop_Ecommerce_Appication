const mongoose = require('mongoose');

const Productschema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,'Product must have a name ']
    },
    company:{
      type:mongoose.Schema.ObjectId,
      ref:'User',
      required:[true,'Product must belong to either admin or comapany']
    },
    
    image:String,
    description:{
        type:String,
        required:[true,'Product should have a description ']
    },
    category:{
        type:String,
        required:[true,'Product should belong to a category']
    },
    price:{
        type:Number,
        required:[true,'Product should have a Price']
    },
    brand:{
        type:String,
        required:[true,'Product should belong to a brand']   
    },
    rating:{
        type:Number,
        default:0
    },
    numReviews:{
        type:Number,
        default:0
    },
    countInStock:{
        type:Number,
        default:1
    }
});


const Product = mongoose.model('Product',Productschema);





module.exports = Product;