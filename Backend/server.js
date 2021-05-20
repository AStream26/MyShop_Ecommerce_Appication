const app  = require('./app.js');
const dotenv =require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');


dotenv.config();

process.on('uncaughtException',err=>{
  //console.log(err.name,err.message);
  process.exit(1);//unhadled exception
  
});
//console.log(process.env.PORT);
mongoose.connect(process.env.URL,{
  useNewUrlParser:true,
  useFindAndModify:false,
  useCreateIndex:true,
  useUnifiedTopology:true
}).then(con=>{
  console.log("Connected to the Database !!");
});


if(process.env.NODE_ENV === 'DEVELOPMENT')
app.use(morgan('dev'));

process.on('unhandledRejection',err=>{
  //console.log(err);
  console.log(err.name,err.message);
  server.close(()=>{
      console.log("Shutting Down the server......");
      process.exit(1);//unhadled exception
  });
});


//console.log(process.env.PORT);
const port  = process.env.PORT || 4000;
const server = app.listen(port,()=>{
  console.log("Server Started !! ");
})