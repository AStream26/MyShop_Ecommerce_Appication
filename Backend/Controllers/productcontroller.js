const ProductModal = require('../Modal/ProductModal');
const factoryFunction = require('./factoryfunction');

exports.getALLProduct = factoryFunction.getALL(ProductModal);

exports.GetProductByid =factoryFunction.getOne(ProductModal);