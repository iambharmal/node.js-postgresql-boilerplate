'use strict'; 

module.exports = class ApiResponseCode {
    static SUCCESS = "SUCCESS";
    static FAIL = "FAIL";
    static VALIDATION_ERROR = "VALIDATION_ERROR";
    static NOT_AUTHORIZED = "NOT_AUTHORIZED";
    static SERVER_ERROR = "SERVER_ERROR";
    static MODEL_NOT_FOUND = "MODEL_NOT_FOUND";
    static MODEL_EXISTS_BEFORE = "MODEL_EXISTS_BEFORE";
    static BAD_REQUEST = "BAD_REQUEST";
    static FORBIDDEN = "FORBIDDEN";
    static PHONE_NOT_VERIFIED = "PHONE_NOT_VERIFIED";
    static PHONE_NOT_ADDED = "PHONE_NOT_ADDED";
}