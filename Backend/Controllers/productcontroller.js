const ProductModal = require('../Modal/ProductModal');

exports.getALLProduct = async (req,res)=>{
      
   try{
    const products = await ProductModal.find();

    res.status(200).json({
        products
    })

   }catch(err){
       res.status(400).json({
           err
       })
   }
    
} 

exports.GetProductByid =async (req,res)=>{
   

    try{
        const id = req.params.id;
        const products = await ProductModal.findById(id);
    
        res.status(200).json({
            products
        })
    
       }catch(err){
           res.status(400).json({
               err
           })
       }
        
}