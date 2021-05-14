const app  = require('./app.js');
const dotenv =require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');


dotenv.config();

//console.log(process.env.PORT);
mongoose.connect(process.env.URL,{
  useNewUrlParser:true,
  useFindAndModify:true,
  useCreateIndex:true,
  useUnifiedTopology:true
}).then(con=>{
  console.log("Connected to the Database !!");
});


if(process.env.NODE_ENV === 'DEVELOPMENT')
app.use(morgan('dev'));



//console.log(process.env.PORT);
const port  = process.env.PORT || 4000;
const server = app.listen(port,()=>{
  console.log("Server Started !! ");
})