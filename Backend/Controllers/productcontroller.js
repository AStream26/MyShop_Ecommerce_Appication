const products = require('../data/products');


exports.getALLProduct = (req,res)=>{
res.status(200).json(products);
} 

exports.GetProductByid = (req,res)=>{
   const product = products.find(item=>item._id === req.params.id);
    res.status(200).json({
        status:"success",
        product
    });
}