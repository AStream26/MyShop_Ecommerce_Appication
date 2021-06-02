const ProductModal = require('../Modal/ProductModal');
const factoryFunction = require('./factoryfunction');

exports.getALLProduct = factoryFunction.getALL(ProductModal);

exports.GetProductByid =factoryFunction.getOne(ProductModal);

exports.addProduct = factoryFunction.createOne(ProductModal);
exports.editProduct = factoryFunction.updateOne(ProductModal);
exports.delete     = factoryFunction.deleteOne(ProductModal);
