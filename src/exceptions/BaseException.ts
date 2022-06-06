'use strict'; 

const ApiResponseTemp = require('../constants/ApiResponseCode.ts');
// import { ApiResponseCode  } from "../constants/ApiResponseCode"

module.exports = class BaseException extends Error {
    // public statusCode:string = '';
    // public serverCode:number = 0;

    constructor(message, statusCode = ApiResponseTemp.FAIL, serverCode = 400) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message;
        statusCode = statusCode;
        serverCode = serverCode;
    }

}
