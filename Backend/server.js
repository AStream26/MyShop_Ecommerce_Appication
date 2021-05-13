const app  = require('./app.js');
const dotenv =require('dotenv');
const morgan = require('morgan');

dotenv.config();

if(process.env.NODE_ENV === 'DEVELOPMENT')
app.use(morgan('dev'));



//console.log(process.env.PORT);
const port  = process.env.PORT || 4000;
const server = app.listen(port,()=>{
  console.log("Server Started !! ");
})