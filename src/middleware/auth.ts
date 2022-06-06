const Jwt = require("jsonwebtoken");
const ApiResponseHandler = require('../helper/ApiResponse.ts')

const config = process.env;

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (!bearerHeader) {
        const err = "error";
        ApiResponseHandler.sendError(req, res, "data", err, "A token is required for authentication");
    }else{
    try {
        const bearerToken = bearerHeader.split(" ")[1];
        const decoded = Jwt.verify(bearerToken, config.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        return next();
    } catch (err) {
        ApiResponseHandler.sendError(req, res, "data", err, "Invalid Token");
    }
    }
};

module.exports = verifyToken;