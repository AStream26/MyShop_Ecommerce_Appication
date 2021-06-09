class APIFeatures{

    constructor(query,querystring){
       
        this.query = query;
        this.querystring = querystring; 
    }

    search(){
     
      if(this.querystring.search && this.querystring.search !=''){
        const q = {
           name:{
               $regex:this.querystring.search,
               $options:'i'
           }
        }

         this.query = this.query.find({...q});
       //  console.log(this.querystring)
         return this;   
    }else{
        this.query = this.query.find({})
    }
    return this;
    }



    filter(){
         
        const myquery = {...this.querystring};
  
        const excludequery = ['sort','page','limit','fields','search'];
         excludequery.forEach(el=>delete myquery[el]);
         let querystring = JSON.stringify(myquery);
         querystring = querystring.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`);
          this.query = this.query.find(JSON.parse(querystring));
          return this;
      }
      sort(){
        if(this.querystring.sort){
            //console.log(req.query.sort);
            const sortby = this.querystring.sort.split(',').join(' ');
            this.query = this.query.sort(sortby);
        }else{
            // this.query.sort('-createdAt');
        }
        return this;
      }
      limitFeild(){
        if(this.querystring.fields){
            //console.log(req.query.)
             const fields = this.querystring.fields.split(',').join(' ');
            
            this. query =this. query.select(fields);
             //console.log(query);
         }else{
             this.query.select('-__v');
         }
         return this;

      }

      pagitaion(){
        const page = this.querystring.page*1 || 1;
        const limit = +this.querystring.limit*1  || 9;
        const skipvalue = (page-1)*limit;
        this.query = this.query.skip(skipvalue).limit(limit);
        
      return this;
      }

};

module.exports  = APIFeatures;