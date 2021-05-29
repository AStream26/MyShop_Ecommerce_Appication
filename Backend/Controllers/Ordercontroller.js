const Order = require('../Modal/Ordermodal');
const catchAsync= require('../util/catchAsync');
const AppError = require('../util/Errorhandler');


exports.orderrequest = catchAsync(async (req,res,next)=>{
   
  

    const {OrderDetail} = req.body;
   // console.log(OrderDetail);
    const {orderItems,shippingAddress,paymentMethod,shippingPrice,totalPrice,taxPrice} = OrderDetail;
  let log = console.log;
  
    if(!OrderDetail || orderItems.length === 0 || !paymentMethod || !shippingAddress  )
    return next(new AppError('Order cannot be Placed !!!',400));
    

const order = await Order.create({
    orderItems,
    shippingAddress,
    paymentMethod,
    user:req.user._id,
    totalPrice,
    taxPrice,
    shippingPrice
});



res.status(200).json({
    status:'success',
    orderid:order._id
});



})
exports.getorder  = catchAsync(async(req,res,next)=>{
       
    const order = await Order.findById(req.params.id);
    // console.log(order.user);
    // console.log(req.user.id);

    if(order.user != req.user.id)
    return next(new AppError('Invalid Order request !!',400));

    res.status(200).json({
        status:'success',
        order
    });
});

exports.Pay  = catchAsync(async(req,res,next)=>{
       
    const order = await Order.findById(req.params.id);
    // console.log(order.user);
    // console.log(req.user.id);

    if(order.user != req.user.id)
    return next(new AppError('Invalid Order request !!',400));

    if(order){
        console.log(req.body);
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResults = {
            id:req.body.id,
            status:req.body.status,
            update_time:req.body.update_time,         
            email_address:req.body.payer.email_address


        }

        const updatedorder = await order.save();
        res.status(200).json({
            status:'success',
            updatedorder
        });
    }

 
});


exports.getOrders = catchAsync(async (req,res,next)=>{
  //  console.log('Reached');
    const order = await Order.find({user:req.user._id});

    if(!order)
    return next(new AppError("You have not order any items !! ",404));

    res.status(200).json({
        message:'success',
        order
    });

    
});