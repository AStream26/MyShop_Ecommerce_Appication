const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const ProductRouter = require('./Route/ProductRoute');
const userRouter = require('./Route/userRouter');
const orderRoute = require('./Route/orderRoute')
const Error_MiddleWare = require('./Controllers/ErrorController');
const AppError = require('./util/Errorhandler');
const app = express();
const cors = require('cors');
app.use(express.json({limit:'10kb'}));//for post request to get data parses the data from body
// app.use(express.urlencoded({extended:true,limit:'10kb'}));
app.set('view engine', 'pug');
app.enable('trust proxy');
app.use(cors({ origin: true }));
app.options('*',cors());

const ___dirname = path.resolve();
//console.log(___dirname);
app.use('/public',express.static(path.join(___dirname,'/public')));

// app.use(function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next();
//  });




app.use(cookieParser());

// app.use((req,res,next)=>{
//     console.log(req.cookies.jwt);
//     next();
// })


app.use('/api/v1/product/',ProductRouter);
app.use('/api/v1/user/',userRouter);
app.use('/api/v1/order/',orderRoute);

app.use('/api/config/paypal',(req,res)=>{
   res.send(process.env.PAYPAL_CLIENT_KEY);
})

app.all('*',(req,res,next)=>{
    
   return next(new AppError(`${req.originalUrl} does on exist `,404));
})



app.use(Error_MiddleWare);

















module.exports = app;