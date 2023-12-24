const {constants} = require("../constants")

const errorHandler = (err,req,res,next) =>{
const statuscode =400;
switch (statuscode) {
    case constants.NOT_FOUND:
        res.json({title : "its not found",
        message:err.message,
        stackTrace : err.stack});

        break;
     case constants.VALIDATION_ERROR:
        res.json({title : "validation error",
        message:err.message,
        stackTrace : err.stack});

    break;

    case constants.UNAUTHORISED:
        res.json({title : "UNAUTHORISED",
        message:err.message,
        stackTrace : err.stack});

    break;

    case constants.FORBIDDEN:
        res.json({title : "FORBIDDEN",
        message:err.message,
        stackTrace : err.stack});
    

    break;

    case constants.SERVER_ERROR:
        res.json({title : "SERVER ERROR",
        message:err.message,
        stackTrace : err.stack});

    break;
    default:
        console.log("no error ,all good");
        break;
}





};
module.exports=errorHandler; 