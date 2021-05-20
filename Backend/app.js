const express = require('express');
const cookieParser = require('cookie-parser');
const ProductRouter = require('./Route/ProductRoute');
const userRouter = require('./Route/userRouter');
const Error_MiddleWare = require('./Controllers/ErrorController');
const AppError = require('./util/Errorhandler');
const app = express();

app.set('view engine', 'ejs');

app.use(express.json({limit:'10kb'}));//for post request to get data parses the data from body
// app.use(express.urlencoded({extended:true,limit:'10kb'}));
app.use(cookieParser());

// app.use((req,res,next)=>{
//     console.log(req.cookies.jwt);
//     next();
// })


app.use('/api/v1/product/',ProductRouter);
app.use('/api/v1/user/',userRouter);


app.all('*',(req,res,next)=>{
    
   return next(new AppError(`${req.originalUrl} does on exist `,404));
})



app.use(Error_MiddleWare);

















module.exports = app;