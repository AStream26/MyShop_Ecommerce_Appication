const express = require('express');
const ProductRouter = require('./Route/ProductRoute');
const app = express();



app.use(express.json({limit:'10kb'}));//for post request to get data parses the data from body
// app.use(express.urlencoded({extended:true,limit:'10kb'}));

app.use('/api/v1/product/',ProductRouter);





















module.exports = app;