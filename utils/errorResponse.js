class errorResponse extends Error{

    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode
    }
}
module.exports=errorResponse;
//the above class was created for message and status code in case of any error
