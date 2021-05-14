const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Productmodal = require('./Modal/ProductModal');
const product = require('./data/products');
dotenv.config({path:'../.env'});
console.log(process.env.URL)
mongoose.connect(process.env.URL,{
    useNewUrlParser:true,
  useFindAndModify:true,
  useCreateIndex:true,
  useUnifiedTopology:true
}).then(con=>{
  console.log("Connected to the Database !!");
});



const importdata =async ()=>{
    try{
      await Productmodal.create(product);
      console.log("Data Successfully Addedd !!");
    }
    catch(err){
   console.log(err);
    }
    process.exit();
}


const deleteData = async ()=>{
    try{
     await Productmodal.deleteMany();
     console.log("Data Successfully deleted !!");
    }
    catch(err){
        console.log(err);
    }
    process.exit();
}


if(process.argv[2]==='--import'){
    importdata();
}
else if(process.argv[2] === '--delete' ){
   deleteData();
}