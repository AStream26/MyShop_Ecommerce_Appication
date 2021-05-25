const mongoose  = require('mongoose');

const ShipingSchema = new mongoose.Schema({
    
    user:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
   

    Address:{type:String,required:true},
    City:{type:String,required:true},
    State:{type:String,required:true},
    Pincode:{type:String,required:true},
    Country:{type:String,required:true},
    MobileNo: {type:String,required:true}

},{timestamps:true});


const shipping = new mongoose.model('Shipping',ShipingSchema);

module.exports = shipping;