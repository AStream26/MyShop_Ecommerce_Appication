const Cart = require('../Modal/cartModal');
const factoryFunction = require('./factoryfunction');
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/Errorhandler');

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
    let query = {_id:req.params.id};
    
    const Item =  await Cart.deleteOne(query);

    res.status(200).json({
        status:"success"
    });


})

exports.addItem = catchAsync(async (req,res,next)=>{
    
    const Item = new Cart({
        user:req.user._id,
        products:req.body.products
    });
  await Item.save();

  res.status(200).json({
      status:"success",
      cartId:Item.id
  });
});



exports.addItemWithId = catchAsync(async(req,res,next)=>{
    const product = req.body.product;
    let query = {_id:req.params.id};
    
    const data = await Cart.findOne(query);
   // console.log(data);
    let Item;
    if(data){
        let b = false;
        data.products.map( (item,i)=>{
              console.log(`${item.product} ${product.product}`);

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

    
    
    
    res.status(200).json({
        status:"success"
    });


});

exports.deleteItemWithId = catchAsync(async(req,res,next)=>{
    
    let product = {product:req.params.productid};
    let query = {_id:req.params.id};

    const data = await Cart.updateOne(query,{$pull:{products:product}});

    res.status(200).json({
        status:"success"
    });


});