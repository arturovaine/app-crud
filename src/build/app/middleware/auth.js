"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const error_1 = require("../utils/error");
const generateToken = async (req, res, next) => {
    const { JWT_SECRET = '' } = process.env;
    const { username, password } = req.body;
    console.log(username, password);
    const user = { username, password };
    const token = jsonwebtoken_1.default.sign(user, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1d' });
    res.locals.token = token;
    return next();
};
const validateToken = async (req, res, next) => {
    const { JWT_SECRET = '' } = process.env;
    const { authorization: token } = req.headers;
    if (!token)
        throw error_1.ERRORS.AUTH.TOKEN_NOT_FOUND;
    try {
        const { iat, exp, ...user } = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        res.locals.user = user;
        return next();
    }
    catch (e) {
        return next(error_1.ERRORS.AUTH.INVALID_TOKEN);
    }
};
exports.default = {
    generateToken,
    validateToken,
};
