const Cart = require('../Modal/cartModal');
const factoryFunction = require('./factoryfunction');
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/Errorhandler');
const User = require('../Modal/Usermodal');

exports.getcart = catchAsync(async (req,res,next)=>{

    const cart = await Cart.find({user:req.user._id}).populate({
        path:'products',
        populate:{
            path:'product',
            select:'countInStock price name image' 
        }
    })

    res.status(200).json({
        status:"success",
        cart
    });
});

exports.deleteCart = catchAsync(async(req,res,next)=>{
  
    const user = await User.findById(req.user._id);
    if(user.cartID)
      await Cart.deleteOne(user.cartID);
  
    user.cartID = null;
    await user.save();
    res.status(200).json({
        status:"success"
    });


})

exports.addItem = catchAsync(async (req,res,next)=>{
     
    const user = await User.findById(req.user._id);
    if(!user)
    return next(new AppError('user does not exist'));
    let cartId;
    if(user?.cartID){


        const product = req.body.product;
        //  console.log( req.body);
          let query = {_id:user.cartID};
          
          const data = await Cart.findOne(query);
      
          if(!data){
              return next(new AppError('No Such Cart Exist',404));
          }
         // console.log(data);
          let Item;
          if(data){
              let b = false;
              data.products.map( (item,i)=>{
                 //   console.log(`${item.product} ${product.product}`);
      
                    if(item.product == product.product){
                        b = true;
                       // console.log("g")
                        item.quantity = product.quantity;
                      
                    }
      
                  } );
      
                  if(b){
                      await data.save();
                  }
                  else{
                      const Item =  await Cart.updateOne(query,{$push:{products:product}});
                  }
          }
      
       cartId = user.cartID;
    }
    else{
               //if user does not have a cart
               let product = [req.body.product]
        const Item = new Cart({
            user:req.user._id,
            products:product
        });
      await Item.save();
    
      
     // console.log(user);
      user.cartID = Item.id;
      cartId = Item.id;
      await user.save();
    }



    
   

  res.status(200).json({
      status:"success",
      cartId
  });
});



// 
exports.deleteItemWithId = catchAsync(async(req,res,next)=>{
     
    if(!req.user.cartID) return naxt(new AppError('No cart Exist',404));

    let product = {product:req.params.id};
    let query = {_id:req.user.cartID};

    const data = await Cart.updateOne(query,{$pull:{products:product}});

    res.status(200).json({
        status:"success",
        cartId:req.params.id
    });


});