class ApiError extends error {
    constructor(
        statusCode,
        message="something went wrong",
        errors=[],
        statck=""
    ){
        super(message)
        this.statusCode = statusCode
        this.data =null
        this.message = message
        this.success =false;
        this.errors = error


        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this,this.constructot)
        }

    }
}