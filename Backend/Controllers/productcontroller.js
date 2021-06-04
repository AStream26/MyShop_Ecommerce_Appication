const ProductModal = require('../Modal/ProductModal');
const factoryFunction = require('./factoryfunction');
const multer = require('multer');
const sharp = require('sharp');
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/Errorhandler');

const multerStorage = multer.memoryStorage();

const multerFilter = (req,file,cb)=>{
  if(file.mimetype.startsWith('image'))
  cb(null,true);
  else{
    cb(new AppError('Upload Photo only!!',400),false);
  }
}

const upload = multer({
  storage:multerStorage,
  fileFilter:multerFilter
});

exports.uploadProductPhoto =  upload.array('image',5);

exports.resizeProductImage = catchAsync(async (req,res,next)=>{

    if(!req.files)
    return next();
    req.body.image = [];
    
    await Promise.all(req.files.map(async (file,i)=>{
        
        const filename= `product-${req.params.id}-${Date.now()}-${i+1}.jpeg`;
        await sharp(file.buffer).resize(2000,1333,{
          fit: 'contain',
          background: '#ffffff'
        })
        .toFormat('jpeg')
        .jpeg({quality:90})
        .toFile(`public/img/Product/${filename}`);
    
      req.body.image.push(filename);
    })
    );

   

  //  console.log(req.files);
    next();
})





exports.getALLProduct = factoryFunction.getALL(ProductModal);

exports.GetProductByid =factoryFunction.getOne(ProductModal);

exports.addProduct = factoryFunction.createOne(ProductModal);
exports.delete     = factoryFunction.deleteOne(ProductModal);

exports.editProduct = factoryFunction.updateOne(ProductModal);
