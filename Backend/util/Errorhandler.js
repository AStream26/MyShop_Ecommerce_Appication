class AppError extends  Error {
    constructor(message,statusCode){
        super(message);
       // console.log(statusCode);
      
        
        this.status = `${statusCode}`.startsWith('4')?'Fail':'Error';
        //console.log(this.status);
        this.statusCode = statusCode;
        this.isoperational  = true;
        Error.captureStackTrace = (this,this.constructor);
    }
}


module.exports = AppError;