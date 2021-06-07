const mongoose = require('mongoose');
const Product  = require('./ProductModal');
const Reviewschema = mongoose.Schema({
    comment:{
        type:String,
        required:[true,'Review cannot be empty']
    },
    title:{
        type:String,
        required:[true,'Title cannot be empty'] 
    },
    rating:{
        type:Number,
        default:4.5,
        min:[1,'Rating must be above 1.0'],
        max:[5,'Rating must be below 5.0']
    },
    avgRating:{
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
    recommend:{
        type:String,
        enum:['Yes','No'],
        required:true

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
    },

},
    
    {   timestamps:true,
        toJSON:{virtuals:true},
        toObject:{virtuals:true}
    });

Reviewschema.index({product:1,user:1},{unique:true});

Reviewschema.pre(/^find/,function(next){
    this.populate({
        path:'user',
        select:'name photo'
    });
    next();
})


Reviewschema.statics.calcAverageRating = async  function(productid){
   // console.log(productid);
  const statics =  await this.aggregate([
       {
        $match:{product:productid}, //match stage
       },
        {
          $group:{
              _id:'$product',
              nRating:{$sum:1},
              avgRating:{$avg:'$rating'}

          }
        }

    ]);

   // console.log(statics);

  if(statics.length>0){
    await   Product.findByIdAndUpdate(productid,{
        numReviews:statics[0].nRating,
        rating:statics[0].avgRating  
    });
  }else{
    await   Product.findByIdAndUpdate(productid,{
        numReviews:0,
        rating:4.5 
    });
  }

}


Reviewschema.post('save',async function(){
   await this.constructor.calcAverageRating(this.product);
    
});

Reviewschema.pre(/^findOneAnd/, async function(next){
   this.r  =  await this.findOne();
   console.log(this.r);
   next();

});

Reviewschema.post(/^findOneAnd/, async function(){
    
   await this.r.constructor.calcAverageRating(this.r.product);
 
 });
 



const Review  = mongoose.model('Review',Reviewschema);
module.exports = Review;
